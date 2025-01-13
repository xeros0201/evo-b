use mongodb::{bson::{self, doc}, Client, Collection  };

use crate::model::{room_log::RoomLog, video_links_model::VideoLinksModel};





#[derive(Debug)]
pub struct MongoDB {
    video_links: Collection<VideoLinksModel>,
    room_log: Collection<RoomLog>,
}

impl MongoDB {
    pub async fn init() -> Self {
        let uri ="mongodb://root:GPMmafJr7cez5HQhCMPx3TqACjgVs43eYsy7cxKaBwCyLQcAAYRFlWXReq0mX0qv@157.173.105.10:5432/?directConnection=true";
        let client = Client::with_uri_str(uri).await.unwrap();
        let db = client.database("video_evo_b");
        let video_links: Collection<VideoLinksModel> = db.collection("video_links");
        let room_log: Collection<RoomLog> = db.collection("room_log");
        MongoDB {
            video_links,
            room_log,
        }
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

