use mongodb::{bson::{self, doc}, options::IndexOptions, Client, Collection, IndexModel  };

use crate::model::{metri_links_model::MetriLinksModel, room_log::RoomLog, video_links_model::VideoLinksModel};





#[derive(Debug)]
pub struct MongoDB {
    video_links: Collection<VideoLinksModel>,
    room_log: Collection<RoomLog>,
    metric_links: Collection<MetriLinksModel>,
}

impl MongoDB {
    pub async fn init() -> Self {
        let uri ="mongodb://root:GPMmafJr7cez5HQhCMPx3TqACjgVs43eYsy7cxKaBwCyLQcAAYRFlWXReq0mX0qv@157.173.105.10:5432/?directConnection=true";
        let client = Client::with_uri_str(uri).await.unwrap();
        let db = client.database("video_evo_b");
        let video_links: Collection<VideoLinksModel> = db.collection("video_links");
        let vide_options = IndexOptions::builder()
            .expire_after(std::time::Duration::from_secs(3600*12)) // 1 hour TTL
            .build();

        let video_index = IndexModel::builder()
            .keys(doc! { "created_at": 1 })
            .options(vide_options)
            .build();
        video_links.create_index(video_index).await.expect("Failed to create index");
        let room_log: Collection<RoomLog> = db.collection("room_log");
        let metric_links: Collection<MetriLinksModel> = db.collection("metri_links");
        MongoDB {
            video_links,
            room_log,
            metric_links,
        }
    }
    pub async fn check_metric(&self , table_id: String, username: String) -> Result< Option<MetriLinksModel>  , anyhow::Error> {
        let metric_link = self.metric_links.find_one(doc! {"table_id": table_id, "username": username}).await?;
        Ok(metric_link)
    }
    pub async fn add_metri_link(&self, metri_link: MetriLinksModel) -> Result<(), anyhow::Error> {
        self.metric_links.insert_one(metri_link).await?;
        Ok(())
    }

    pub async fn update_metri_link(&self, metri_link: MetriLinksModel) -> Result<(), anyhow::Error> {
        self.metric_links.find_one_and_update(doc! {"_id": metri_link._id}, doc! {"$set": bson::to_document(&metri_link)?}).await?;
        Ok(())
    }
    pub async fn add_room_log(&self, room_log: RoomLog) -> Result<(), anyhow::Error> {
        self.room_log.insert_one(room_log).await?;
        Ok(())
    }
    pub async fn get_room_log(&self, table_id: String,_type: String) -> Result<Option<RoomLog>, anyhow::Error> {
        let room_log = self.room_log.find_one(doc! {"table_id": table_id,"_type": _type}).await?;
        Ok(room_log)
    }
    pub async fn get_video_by_table_id(&self, table_id: String) -> Result<Option<VideoLinksModel>, anyhow::Error> {
        let video_links = self.video_links.find_one(doc! {"table_id": table_id}).await?;
        Ok(video_links)
    }
    pub async fn add_video_link(&self, video_link: VideoLinksModel) -> Result<(), anyhow::Error> {
        let check_video_link = self.get_video_by_table_id(video_link.table_id.clone()).await?;
        if let Some(current_video_link) = check_video_link {
            self.video_links.find_one_and_update(
                doc! {"_id": current_video_link._id}, 
                doc! {"$set": bson::to_document(&video_link)?}
            ).await?;
        } else {
            self.video_links.insert_one(video_link.clone()).await?;
        }
        Ok(())
    }
}

