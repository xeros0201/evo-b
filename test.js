const fs = require('fs');
const tables ={
    "01rb77cq1gtenhmo": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "tVariant": "auto"
        },
        "title": "오토 룰렛 VIP",
        "descrKey": "auto",
        "frontendApp": "roulette",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true
    },
    "qgqrucipvltnvnvq": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 W",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "p34i6wgax7bqb5cg": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 G",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "DealOrNoDeal0001": {
        "gt": "liveslotdealnodeal",
        "gp": "evolution",
        "gv": "live",
        "title": "딜 또는 노딜",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_dealornodeal_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_dealornodeal_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_dealornodeal_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/dealnodeallivespins.svg"
        },
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true,
        "copyright": "DEAL OR NO DEAL TM & © 2002, {year} ENDEMOL SHINE IP B.V",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/dealnodeallivespins.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "jhs44mm0v3fi3aux": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 C",
        "gConfig": {
            "seats": 1
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "CrazyPachinko001": {
        "gt": "crazypachinko",
        "gp": "evolution",
        "gv": "live",
        "title": "크레이지 파친코",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_crazypachinko_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_crazypachinko_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_crazypachinko_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/crazypachinko.svg"
        },
        "frontendApp": "ls2",
        "bl": {
            "min": 100,
            "max": 500
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/crazypachinko.webp"
        }
    },
    "RngSicbo00000001": {
        "gt": "rng-sicbo",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 슈퍼 식보",
        "bl": {
            "min": 200,
            "max": 10000
        },
        "published": true
    },
    "SalPrivBac000010": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 J",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "SpeedBlackjack03": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 C",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "ESpeedBJ00000010": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 10",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 20000,
            "max": 2500000
        },
        "published": true
    },
    "nc3u2l6y0khszjv7": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 블랙잭 H",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 25000,
            "max": 2500000
        },
        "published": true
    },
    "NoCommBac0000001": {
        "gt": "baccarat",
        "gst": "nocommission",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "quickdown"
        },
        "title": "노 커미션 바카라",
        "descrKey": "nocommission",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "GKBJ000000000001:r4keb6jwyj4jxzvx": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "그랜드 코리안 스피드 블랙잭",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 500000,
            "max": 1000000
        },
        "published": true
    },
    "puu47n7mic3rfd7y:rkex54fh4hso2gxx": {
        "gt": "dragontiger",
        "gp": "evolution",
        "gv": "live",
        "title": "엠퍼러 드래곤 타이거",
        "lang": "zh",
        "frontendApp": "dragontiger.regular,dragontiger.v0",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/dragontiger_emperor.webp"
        }
    },
    "p63cmvmwagteemoy": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 바카라 A",
        "descrKey": "speed",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "Exclusive",
                "color": "#3A4CAB"
            }
        }
    },
    "nbjetztthawanhey": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP M",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 500000,
            "max": 2500000
        },
        "published": true
    },
    "rep45wbxnyjl7hr2": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 5",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "xqyb2u7fqkexxpa0": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 블랙잭 D",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 20000,
            "max": 2500000
        },
        "published": true
    },
    "MonBigBaller0001": {
        "gt": "monopolybigballer",
        "gp": "evolution",
        "gv": "live",
        "title": "모노폴리 빅 볼러",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_monopolybigballer_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_monopolybigballer_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_monopolybigballer_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/monopolybigballer.svg"
        },
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true,
        "copyright": "MONOPOLY TM, ® & © 1935, {year} Hasbro.",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/monopolybigballer.webp"
        }
    },
    "ehw2fvl831m5n2km": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP F",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "rfbo6mhpdgyqbpay:rkeofhp44hsn62qf": {
        "gt": "bacbo",
        "gp": "evolution",
        "gv": "live",
        "title": "엠퍼러 백보",
        "lang": "zh",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/bacbo.webp"
        }
    },
    "rng-lbaccarat000:q5ljzxx5sox4vmas": {
        "gt": "rng-baccarat",
        "gst": "lightning",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 라이트닝 바카라",
        "gConfig": {
            "lightning": true
        },
        "frontendApp": "rng-baccarat.lightning",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "RngDealNoDeal001:r4kev3alyj4j2brs": {
        "gt": "rng-dealnodeal",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 딜 또는 노딜",
        "bl": {
            "min": 100,
            "max": 900000
        },
        "published": true,
        "copyright": "DEAL OR NO DEAL TM & © 2002, {year} ENDEMOL SHINE IP B.V"
    },
    "LightningTable01:skffw5ewb6zlsvjd": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 룰렛",
        "descrKey": "lightning",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightning_roulette_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightning_roulette_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightning_roulette_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_roulette.svg"
        },
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 3000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_roulette.webp",
            "effect": "lightning"
        }
    },
    "SalPrivBac000011": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 K",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rpjvse45mruw7nbx": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 41",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "ExChEpicSpins001:skffw5p7b6zlsv2b": {
        "gt": "extrachilliepicspins",
        "gp": "evolution",
        "gv": "live",
        "title": "슈퍼 칠리 에픽 스핀",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_extrachilliepicspins_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_extrachilliepicspins_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_extrachilliepicspins_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/extrachilliepicspins.svg"
        },
        "frontendApp": "ls3",
        "bl": {
            "min": 500,
            "max": 100000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/extrachilliepicspins.webp"
        }
    },
    "SpeedBlackjack01": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 A",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "ndgvz5mlhfuaad6e": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 D",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "FunkyTime0000001:rkeyeitg4hso22hz": {
        "gt": "funkytime",
        "gp": "evolution",
        "gv": "live",
        "title": "펑키 타임",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_funky_time_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_funky_time_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_funky_time_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/funkytime.svg"
        },
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/funkytime.webp"
        }
    },
    "obj64qcnqfunjelj": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 J",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "774SuperSpeedBac": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed",
            "tVariant": "super_speed"
        },
        "title": "슈퍼 스피드 바카라",
        "descrKey": "q",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/superspeedbaccarat.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "ESpeedBJ00000011": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 11",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 20000,
            "max": 2500000
        },
        "published": true
    },
    "HSpeedBac0000002": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "힌디어 스피드 바카라 B",
        "descrKey": "speed",
        "lang": "hi",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "oga6ftnw3fltvggm:r4kdw7biyj4jwtax": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피킹 스피드 바카라 2",
        "descrKey": "speed",
        "lang": "ko",
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true
    },
    "rng-rt-american0:rkgrtctpmanufkul": {
        "gt": "rng-american-roulette",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 아메리칸 룰렛",
        "frontendApp": "rng-roulette.horizon.preview",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true
    },
    "gkmq0o2hryjyqu30": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 A",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "xie6wodezmfwmmcb": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "펀토 방코",
        "lang": "it",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "pdk54i3vey6up3dg": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 16",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "48z5pjps3ntvqc1b": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "tVariant": "auto"
        },
        "title": "오토 룰렛",
        "descrKey": "auto",
        "frontendApp": "roulette",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true
    },
    "qluobcqp5thprxpw": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Xclusive스피드 바카라 C",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 5000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qluoarkdousprqav": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Xclusive스피드 바카라 B",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 5000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qgqrv4asvltnvuty": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 X",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "SalPrivBac000014": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 N",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "RngCraps00000001:rkgsn7krmanuhkv4": {
        "gt": "rng-craps",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 크랩스",
        "gConfig": {
            "enableRollHistory": "stable"
        },
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true
    },
    "RedDoorRoulette1": {
        "gt": "reddoorroulette",
        "gp": "evolution",
        "gv": "live",
        "title": "레드 도어 룰렛",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_reddoorroulette_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_reddoorroulette_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_reddoorroulette_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/reddoorroulette.svg"
        },
        "frontendApp": "roulette.ecas",
        "bl": {
            "min": 200,
            "max": 2000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/reddoorroulette.webp"
        }
    },
    "AndarBahar000001:rken3pfg4hsn6btc": {
        "gt": "andarbahar",
        "gp": "evolution",
        "gv": "live",
        "title": "슈퍼 내부 외부",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_andarbahar_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_andarbahar_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_andarbahar_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/andarbahar.png"
        },
        "frontendApp": "andarbahar",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/andarbahar.webp"
        }
    },
    "CrazyBalls000001": {
        "gt": "crazyballs",
        "gp": "evolution",
        "gv": "live",
        "title": "크레이지 볼",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_crazyballs_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_crazyballs_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_crazyballs_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/crazyballs.svg"
        },
        "frontendApp": "screwball",
        "bl": {
            "min": 100,
            "max": 2000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/crazyballs.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "rctf4gu6btsmghbt": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 32",
        "gConfig": {
            "seats": 7
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "m6mfo66sb7eafnzz": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP J",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "qluobvspuzkpsbte": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Xclusive스피드 바카라 D",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 5000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qluocdvx5thprylx": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Xclusive스피드 바카라 E",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 5000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qgdk6rtpw6hax4fe": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 바카라 C",
        "descrKey": "speed",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "nmwde3fd7hvqhq43": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 F",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "GonzoTM000000001:rkgp6k7zmanubybg": {
        "gt": "gonzotreasuremap",
        "gp": "evolution",
        "gv": "live",
        "title": "곤조의 보물 지도",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_gonzotresuremap_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_gonzotresuremap_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_gonzotresuremap_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/gonzotreasuremap.svg"
        },
        "bl": {
            "min": 100,
            "max": 250000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/gonzotreasuremap.webp"
        }
    },
    "SalPrivBJ0000010:q5larruysox33elj": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 J",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "ovu5eja74ccmyoiq": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 N",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "CrazyTime0000002": {
        "gt": "crazytime",
        "gp": "evolution",
        "gv": "live",
        "title": "크레이지 타임 A",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_crazytime_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_crazytime_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_crazytime_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/crazytime.svg"
        },
        "bl": {
            "min": 100,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/crazytime.webp"
        }
    },
    "nsxqkywul2nzcwwh": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP P",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "oviip2jfdaatqae3:r4kdtkudyj4jwgg5": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 딜러 스피드 블랙잭",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 1
        },
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 5000,
            "max": 1000000
        },
        "published": true
    },
    "nmwdzhbg7hvqh6a7": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 G",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "LotusSicBo000001": {
        "gt": "sicbo",
        "gp": "evolution",
        "gv": "live",
        "title": "로투스 식보",
        "lang": "vn",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "flag": "none"
    },
    "oa7fvyaiqfueq5ob": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP Q",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "nveq65dtmn6n4mnd": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP S",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "z5pf5pichcsw3d2o": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP G",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "o735cjzyaeasv4o6": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 3",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SpeedBlackjack18": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 R",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "rng-rt-xxxtreme1:rkgsw76gmanuiahb": {
        "gt": "rng-roulette",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 XXXtreme 라이트닝 룰렛",
        "descrKey": "xxxtreme-lightning",
        "frontendApp": "rng-roulette.horizon.preview",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "effect": "red-lightning"
        }
    },
    "pv5q45yjhasyt46y": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "엠퍼러 룰렛",
        "descrKey": "immersiveLite",
        "lang": "zh",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "pdk5zo7cey6upxlm": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 12",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "oqidcfpsuwbl5cqd": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 감마",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "nkyiswhd2jpbw4i4": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP N",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "ndgv45bghfuaaebf": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 E",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "rng-dragontiger0": {
        "gt": "rng-dragontiger",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 드래곤 타이거",
        "frontendApp": "rng-dragontiger.v0",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true
    },
    "o735azzsaeasv2pr": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 2",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "XXXtremeLB000001:sqwbp2znxjyjm27g": {
        "gt": "baccarat",
        "gst": "xxxtreme-lightning",
        "gp": "evolution",
        "gv": "live",
        "title": "XXXtreme 라이트닝 바카라",
        "descrKey": "xxxtremelightning",
        "frontendApp": "baccarat.xtreme",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/xxxtremelightningbaccarat.webp",
            "effect": "red-lightning"
        }
    },
    "KoSalPrivBac0001": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 살롱 프라이빗 바카라",
        "descrKey": "private",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1500000,
            "max": 22500000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "sni5cza6d1vvl50i": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "party"
        },
        "title": "블랙잭 파티",
        "descrKey": "party",
        "gConfig": {
            "seats": 1,
            "tableNumbersReplace": "all"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 500,
            "max": 250000
        },
        "published": true
    },
    "o735di2eiwssv7eu": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 4",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBJ0000005:q5lap6z3sox33aot": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 E",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "p36n5jvdx7bugh2g:q5laqlvssox33bpy": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 G",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "gfzrqe4hqv24kukc": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 그랜드 VIP",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 500000,
            "max": 2500000
        },
        "published": true
    },
    "BalloonRace00001": {
        "gt": "balloonrace",
        "gp": "evolution",
        "gv": "live",
        "title": "풍선레이스",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_balloonrace_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_balloonrace_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_balloonrace_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/balloonrace.svg"
        },
        "bl": {
            "min": 100,
            "max": 600000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/balloonrace.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "DragonTiger00001:rkex5wcs4hso2gfm": {
        "gt": "dragontiger",
        "gp": "evolution",
        "gv": "live",
        "title": "드래곤 타이거",
        "frontendApp": "dragontiger.regular,dragontiger.v0",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/dragontiger.webp"
        }
    },
    "nveq66tfmn6n4moi": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP T",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "mdkqijp3dctrhnuv:rkgrcbtjmanued6u": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 룰렛",
        "descrKey": "private",
        "frontendApp": "roulette",
        "bl": {
            "min": 100000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rng-gwbaccarat00:r4mpqvigxd7ap3rg": {
        "gt": "rng-baccarat",
        "gst": "goldenwealth",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 풍성한 골든 바카라",
        "descrKey": "goldenwealth",
        "frontendApp": "rng-baccarat.goldenWealth",
        "bl": {
            "min": 1000,
            "max": 250000
        },
        "published": true
    },
    "SalPrivBac000004": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 D",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "SalPrivBac000008": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 H",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "qsf63ownyvbqnz33": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 Z",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "oa7fpshyqfueqxuj": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP Z",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "easybj0000000001": {
        "gt": "easybj",
        "gp": "evolution",
        "gv": "live",
        "title": "쉬운 블랙잭",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_easyblackjack_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_easyblackjack_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_easyblackjack_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/easyblackjack.svg"
        },
        "bl": {
            "min": 1000,
            "max": 20000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/easyblackjack.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "bciewncrf5ijneys": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP U",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "pdk5yexcz4iepelq": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 10",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "wzg6kdkad1oe7m5k:rkgqt32xmanudgb2": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "VIP 룰렛",
        "descrKey": "immersiveLite",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true
    },
    "RngMegaBall00001": {
        "gt": "rng-megaball",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 메가볼",
        "gConfig": {
            "maxCardsCount": 400
        },
        "bl": {
            "min": 10,
            "max": 100000
        },
        "published": true
    },
    "oqicznoauwbl46am": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 알파",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBJ0000015:r6a3lh5vo7jy4ryr": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 O",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "q25bmd63gsy3ngfl": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 바카라 E",
        "descrKey": "speed",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "AmericanTable001:sd6kadpk26cj2pzi": {
        "gt": "americanroulette",
        "gp": "evolution",
        "gv": "live",
        "title": "아메리칸 룰렛",
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/american_roulette.webp"
        }
    },
    "SalPrivBJ0000009:q5larfresox33dnl": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 I",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "npn3y3hkld2mcdjt:r4kdwpsjyj4jwrjr": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피킹 스피드 바카라",
        "descrKey": "speed",
        "lang": "ko",
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true
    },
    "ndgvwvgthfuaad3q": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 C",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "cpxl81x0rgi34cmo": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP B",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "qgqrhfvsvltnueqf": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 U",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "CSPTable00000001": {
        "gt": "csp",
        "gp": "evolution",
        "gv": "live",
        "title": "캐리비안 스터드 포커",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_csp.webp"
        }
    },
    "LightningDice001:skffw5qcb6zlsv2h": {
        "gt": "lightningdice",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 다이스",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightning_dice_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightning_dice_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightning_dice_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_dice.svg"
        },
        "bl": {
            "min": 100,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_dice.webp",
            "effect": "lightning"
        }
    },
    "rng-topcard00001": {
        "gt": "rng-topcard",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 탑카드",
        "gConfig": {
            "aSpotColor": "255,15,15",
            "bSpotColor": "14,94,255",
            "xSpotColor": "228,196,132",
            "xxSpotColor": "228,196,132"
        },
        "frontendApp": "rng-dragontiger.v0",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true
    },
    "p2f2uxiym2tmvzgq": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 H",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "Monopoly00000001": {
        "gt": "monopoly",
        "gp": "evolution",
        "gv": "live",
        "title": "모노폴리 라이브",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_monopoly_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_monopoly_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_monopoly_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/monopoly.svg"
        },
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true,
        "copyright": "MONOPOLY TM, ® & © 1935, {year} Hasbro.",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/monopoly.webp"
        }
    },
    "GoldVaultRo00001:rkgqzdulmanudrbx": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "골드 볼트 룰렛",
        "descrKey": "goldvault",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_goldvault_roulette_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_goldvault_roulette_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_goldvault_roulette_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/goldvault_roulette.svg"
        },
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/goldvault_roulette.webp",
            "effect": "gold"
        }
    },
    "SalPrivBJ0000016:r6a3ojfpo7jy5hjz": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 P",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "psm2um7k4da8zwc2": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP E",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "LightningStorm01": {
        "gt": "lightningstorm",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 스톰",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightningstorm_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightningstorm_mobile.webp",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightningstorm_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightningstorm.svg"
        },
        "frontendApp": "lightningstorm.V0",
        "bl": {
            "min": 50,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightningstorm.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            },
            "effect": "blue-lightning"
        }
    },
    "StockMarket00003": {
        "gt": "rng-stockmarket",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 주식 시장",
        "frontendApp": "stockmarket",
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "p2f2ootrm2tmvk6h": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 22",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "ps3ufteekfe2fu24": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 E",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "rdefcn4sffgo39l7": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 다이아몬드 VIP",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 2500000
        },
        "published": true
    },
    "leqhceumaq6qfoug": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 A",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "ETHTable00000001": {
        "gt": "eth",
        "gp": "evolution",
        "gv": "live",
        "title": "익스트림 텍사스 홀덤",
        "bl": {
            "min": 500,
            "max": 500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_eth.webp"
        }
    },
    "q6ardco6opnfwes4": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "엠퍼러 스피드 바카라 D",
        "descrKey": "speed",
        "lang": "zh",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none"
    },
    "lightningsb00001": {
        "gt": "sicbo",
        "gst": "lightning",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 식보",
        "descrKey": "lightningsicbo",
        "frontendApp": "sicbo.lightning",
        "bl": {
            "min": 200,
            "max": 500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightningsicbo.webp",
            "effect": "lightning"
        }
    },
    "VPTable000000001:rkgrqdygmanufeap": {
        "gt": "videopoker",
        "gp": "evolution",
        "gv": "live",
        "title": "비디오 포커",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_videopoker_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_videopoker_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_videopoker_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/videopoker.svg"
        },
        "frontendApp": "videopoker.v1",
        "bl": {
            "min": 100,
            "max": 250000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/videopoker.webp"
        }
    },
    "qgonc7t4ucdiel4o": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 T",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "teenpattitable01:rkgrlvx2manuezq3": {
        "gt": "teenpatti",
        "gp": "evolution",
        "gv": "live",
        "title": "카드 3장",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_teenpatti_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_teenpatti_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_teenpatti_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/teenpatti.svg"
        },
        "frontendApp": "tcp.v2",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_teenpatti.webp"
        }
    },
    "SalPrivBJ0000013:r6a3h7iao7jy3zbg": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 M",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "pezjou3ltf6hvzjk:sq5sdacjev3zqvsa": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "타이 스피드 바카라 A",
        "descrKey": "speed",
        "lang": "th",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none"
    },
    "FanTan0000000001:rkeybwqu4hso2snw": {
        "gt": "fantan",
        "gp": "evolution",
        "gv": "live",
        "title": "판탄",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_fantan_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_fantan_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_fantan_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/fantan.svg"
        },
        "bl": {
            "min": 200,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/fantan.webp"
        }
    },
    "o3d9tx3u8kd0yawc": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP D",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "n7ltqx5j25sr7xbe": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 B",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rdjda6zq7jdyo6cs": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 4",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "EmperorSB0000002:skffw5n6b6zlsvyy": {
        "gt": "sicbo",
        "gp": "evolution",
        "gv": "live",
        "title": "엠퍼러 식보 A",
        "lang": "zh",
        "bl": {
            "min": 200,
            "max": 2500000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "lnofoyxv756qaezy": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 F",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "uwd2bl2khwcikjlz": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 A",
        "gConfig": {
            "seats": 1
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 5000,
            "max": 2500000
        },
        "published": true
    },
    "rnghilo000000001": {
        "gt": "rng-hilo",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 하이로",
        "descrKey": "firstpersonhilo",
        "frontendApp": "rng-hilo.v0",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "ok37hvy3g7bofp4l": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 C",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "pwsaqk24fcz5qpcr": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "엠퍼러 스피드 바카라 C",
        "descrKey": "speed",
        "lang": "zh",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none"
    },
    "l5aug44hhzr3qvxs": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP C",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBJ0000017:r6a3qd7lo7jy5u2z": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 Q",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "q6wo6fjprnlhuf36": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 28",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "lkcbrbdckjxajdol:rkgrho6nmanueqb5": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 룰렛",
        "descrKey": "speed",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true
    },
    "pgpalz6645wjf7ef:r4kdqsunyj4jv4ni": {
        "gt": "powerscalableblackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "코리안 딜러 파워 블랙잭",
        "lang": "ko",
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 5000,
            "max": 1000000
        },
        "published": true
    },
    "o4kymodby2fa2c7g": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 S",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "qlrc3fq3v7p6awm4": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 C",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "LightningDT00001": {
        "gt": "dragontiger",
        "gst": "lightning",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 드래곤 타이거",
        "descrKey": "lightning",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightningdt_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightningdt_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightningdt_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightningdragontiger.svg"
        },
        "frontendApp": "dragontiger.lightning",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightningdragontiger.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            },
            "effect": "lightning"
        }
    },
    "CFreeBetBjVIP002:sd6qtq5m26ck6pav": {
        "gt": "classicfreebet",
        "gp": "evolution",
        "gv": "live",
        "title": "프리배팅 VIP 블랙잭 B",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true,
            "tableNumbersReplace": "true"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/classicfreebet_blackjack.webp"
        }
    },
    "s63nx2mpdomgjagb": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP H",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "nxpkul2hgclallno": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 I",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "TopCard000000001:r4keh4klyj4jyoo2": {
        "gt": "topcard",
        "gp": "evolution",
        "gv": "live",
        "title": "축구 스튜디오",
        "gConfig": {
            "aSpotColor": "255,0,0",
            "bSpotColor": "14,94,255",
            "xSpotColor": "228,196,132",
            "xxSpotColor": "228, 196, 132"
        },
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_topcard_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_topcard_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_topcard_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/topcard.svg"
        },
        "frontendApp": "dragontiger.topCard,dragontiger.v0",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/topcard.webp"
        }
    },
    "CrazyTime0000001": {
        "gt": "crazytime",
        "gp": "evolution",
        "gv": "live",
        "title": "크레이지 타임",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_crazytime_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_crazytime_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_crazytime_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/crazytime.svg"
        },
        "bl": {
            "min": 100,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/crazytime.webp"
        }
    },
    "nbjettfehawanhes": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP L",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "zixzea8nrf1675oh": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "squeeze"
        },
        "title": "스퀴즈 바카라",
        "descrKey": "squeeze",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "peekbaccarat0001": {
        "gt": "baccarat",
        "gst": "peek",
        "gp": "evolution",
        "gv": "live",
        "title": "바카라 훔쳐보기",
        "frontendApp": "baccarat.peek,baccarat.v0,baccarat",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/peekbaccarat.webp"
        }
    },
    "qfyzapjqrixfb3bx": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 M",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "o4kyj7tgpwqqy4m4": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 Q",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "ESpeedBJ00000001": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 1",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "FPVP000000000001": {
        "gt": "rng-videopoker",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 비디오 포커",
        "frontendApp": "rng-videopoker.v1",
        "bl": {
            "min": 100,
            "max": 100000
        },
        "published": true
    },
    "o7347okwaeasvy2y": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 1",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "o4kylkahpwqqy57w": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 R",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "SalPrivBJ0000014:r6a3jnevo7jy4edr": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 N",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rep5aor7nyjl7qli": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 6",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "rpjvjgoamruw6jvl": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 38",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "Always8baccarat0": {
        "gt": "baccarat",
        "gst": "always8",
        "gp": "evolution",
        "gv": "live",
        "title": "올웨이즈 8 바카라",
        "descrKey": "always8",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_always8baccarat_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_always8baccarat_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_always8baccarat_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/always8baccarat.svg"
        },
        "frontendApp": "baccarat.eight",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/always8baccarat.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "rng-bj-lightning": {
        "gt": "rng-lightningscalablebj",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 라이트닝 블랙잭",
        "frontendApp": "rng-blackjack.horizon",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "rpjvlz76mruw6uj3": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 36",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "rep5gu47nyjmafgt": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 9",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "sbjfunfun2100001": {
        "gt": "funfun21scalablebj",
        "gp": "evolution",
        "gv": "live",
        "title": "인피니트 펀펀 21 블랙잭",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_infinitefunfun21blackjack_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_infinitefunfun21blackjack_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_infinitefunfun21blackjack_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/infinitefunfun21blackjack.svg"
        },
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/infinitefunfun21blackjack.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "KSSBJ00000000007": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 블랙잭 G",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "rpjvp2tbmruw7dke": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 37",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "MegaBall00000001": {
        "gt": "megaball",
        "gp": "evolution",
        "gv": "live",
        "title": "메가 볼",
        "gConfig": {
            "maxCardsCount": 400
        },
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_megaball_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_megaball_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_megaball_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/megaball.svg"
        },
        "bl": {
            "min": 10,
            "max": 100000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/megaball.webp"
        }
    },
    "rep5kwmdnyjmasxi": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 11",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "FreeBet000000001": {
        "gt": "freebet",
        "gp": "evolution",
        "gv": "live",
        "title": "인피니트 프리 베팅 블랙잭",
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/freebet.webp"
        }
    },
    "DHPTable00000001:r3jbnvxlabcwzohb": {
        "gt": "dhp",
        "gp": "evolution",
        "gv": "live",
        "title": "투 핸드 카지노 홀덤",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_dhp.webp"
        }
    },
    "60i0lcfx5wkkv3sy": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "quickdown"
        },
        "title": "바카라 B",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "SalPrivBJ0000006:q5las34asox33hw5": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 F",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 2000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "bghflgi59db7d7r2": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP X",
        "gConfig": {
            "seats": 1
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "livespins0000000": {
        "gt": "betwithstreamer",
        "gp": "evolution",
        "gv": "live",
        "title": "스트리머와 베팅",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_livespins_desktop.webp",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_livespins_mobile.webp",
            "video": "https://bshots.egcvi.com/thumbnail/hero_livespins_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/betwithstreamers.svg"
        },
        "frontendApp": "livespins",
        "bl": {
            "min": 200,
            "max": 100000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "rng-bj-standard0": {
        "gt": "rng-blackjack",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 블랙잭",
        "frontendApp": "rng-blackjack.horizon,rng-blackjack.horizon.preview",
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true
    },
    "THBTable00000001": {
        "gt": "thb",
        "gp": "evolution",
        "gv": "live",
        "title": "텍사스 홀덤의  보너스 포커",
        "frontendApp": "thb.v2",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_thb.webp"
        }
    },
    "rep5m2cdnyjmazzo": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 12",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "BonsaiBacc000002": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "본자이 스피드 바카라 B",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 20000000
        },
        "published": true
    },
    "PowerBall0000001:rkejztjx4hsnuaxr": {
        "gt": "powerball",
        "gp": "evolution",
        "gv": "live",
        "title": "EVO 파워볼",
        "lang": "ko",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_evopowerball_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_evopowerball_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_evopowerball_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/powerball_korean.svg"
        },
        "frontendApp": "powerball.v0",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/powerball_korean.webp"
        }
    },
    "pv2y4kmsanvdvwgy:sq5rwkv2ev3zojus": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "로투스 스피드 바카라 A",
        "descrKey": "speed",
        "lang": "vi",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qsf7alptyvbqohva": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 2",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "LightningBall001": {
        "gt": "lightningball",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 볼",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightningball_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightningball_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightningball_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightningball.svg"
        },
        "bl": {
            "min": 10,
            "max": 100000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightningball.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            },
            "effect": "lightning"
        }
    },
    "lv2kzclunt2qnxo5": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 B",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "HoldemTable00001": {
        "gt": "holdem",
        "gp": "evolution",
        "gv": "live",
        "title": "카지노 홀덤",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_holdem.webp"
        }
    },
    "7nyiaws9tgqrzaz3:r4hu7etexd7j3pwi": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "축구 스튜디오 룰렛",
        "descrKey": "immersiveLite",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 2000000
        },
        "published": true
    },
    "puu43e6c5uvrfikr": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "엠퍼러 스피드 바카라 B",
        "descrKey": "speed",
        "lang": "zh",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none"
    },
    "2uxabtm1rwaxcmdm": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP V",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "pdk52e3rey6upyie": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 13",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "nkyivihc2jpbw4uy": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP O",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBac000009": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 I",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "mdkqdxtkdctrhnsx:q5laoe63sox3234z": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 A",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "PTBaccarat000001:rkgxsjblmanutwi4": {
        "gt": "baccarat",
        "gst": "prosperitytree",
        "gp": "evolution",
        "gv": "live",
        "title": "번영의 나무 바카라",
        "descrKey": "prosperitytree",
        "frontendApp": "baccarat.prosperity",
        "bl": {
            "min": 1000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/prosperitytreebaccarat.webp"
        }
    },
    "qfyxcoqlrcfe44nj": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 26",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "p34gzl44usw74wks": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 F",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "ESpeedBJ00000003": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 3",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "CFreeBetBjVIP003:rlyjjtraqeozsdp4": {
        "gt": "classicfreebet",
        "gp": "evolution",
        "gv": "live",
        "title": "프리배팅 VIP 블랙잭 A",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true,
            "tableNumbersReplace": "true"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/classicfreebet_blackjack.webp"
        }
    },
    "KSSBJ00000000002": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 블랙잭 B",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 2
        },
        "opensAt": {
            "time": "07:00"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 25000,
            "max": 2500000
        },
        "published": true
    },
    "Craps00000000001:rkex32264hso2ap2": {
        "gt": "craps",
        "gp": "evolution",
        "gv": "live",
        "title": "크랩스",
        "gConfig": {
            "enableRollHistory": "stable"
        },
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/craps.webp"
        }
    },
    "BonsaiBacc000003": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "본자이 스피드 바카라 C",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 20000000
        },
        "published": true
    },
    "nsxqpyiol2nzcz6t": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP R",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 500000,
            "max": 2500000
        },
        "published": true
    },
    "k4r2kvd34eqqb6vh": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 블랙잭 M",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 20000,
            "max": 2500000
        },
        "published": true
    },
    "InstantRo0000001": {
        "gt": "instantroulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed",
            "tVariant": "auto"
        },
        "title": "슈퍼 스피드 룰렛",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_instant_roulette_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_instant_roulette_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_instant_roulette_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/superspeedroulette.svg"
        },
        "frontendApp": "roulette",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/superspeedroulette.webp"
        }
    },
    "rep5ca4ynyjl7wdw": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 7",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "lnofpmm3756qae2c": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 G",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "CashOrCrash00001": {
        "gt": "cashorcrash",
        "gp": "evolution",
        "gv": "live",
        "title": "캐시 혹은 크래시",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/cashorcrash.webp"
        }
    },
    "rngbaccarat00000": {
        "gt": "rng-baccarat",
        "gst": "redenvelopev2",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 바카라",
        "frontendApp": "rng-baccarat.regular,rng-baccarat.v0",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "rep5eiecnyjl75lq": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 8",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "ESpeedBJ00000007": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 7",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "9f4xhuhdd005xlbl": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 B",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "oytmvb9m1zysmc44": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "quickdown"
        },
        "title": "바카라 A",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "olbibp3fylzaxvhb:q5laotpesox325dx": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 B",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rpju6q5dmruw45u5": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 34",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "k37tle5hfceqacik:spmxxxgesppom3mn": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "tVariant": "auto"
        },
        "title": "자동 라이트닝 룰렛",
        "descrKey": "lightning",
        "frontendApp": "roulette",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "PowerInfiniteBJ1": {
        "gt": "powerscalableblackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "파워 블랙잭",
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 1000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/powerblackjack.webp"
        }
    },
    "vctlz20yfnmp1ylr:rkgq53f6manud3ep": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "룰렛",
        "descrKey": "immersiveLite",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true
    },
    "StockMarket00001": {
        "gt": "stockmarket",
        "gp": "evolution",
        "gv": "live",
        "title": "주식 시장",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_stockmarket_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_stockmarket_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_stockmarket_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/stockmarketlive.svg"
        },
        "frontendApp": "stockmarket",
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "SuperSicBo000001:r4kc4dspyj4jttls": {
        "gt": "sicbo",
        "gp": "evolution",
        "gv": "live",
        "title": "슈퍼 식보",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_supersicbo_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_supersicbo_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_supersicbo_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/supersicbo.svg"
        },
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/supersicbo.webp"
        }
    },
    "ps3uijuskfe2f3cj": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 G",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "MOWDream00000001:skffw5qeb6zlsv2k": {
        "gt": "moneywheel",
        "gp": "evolution",
        "gv": "live",
        "title": "드림캐쳐",
        "bl": {
            "min": 100,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/dreamcatcher.webp"
        }
    },
    "q25awuwygsy3lvnj": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 바카라 D",
        "descrKey": "speed",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "pv2zgy42anvdwk3l:sq5r6tueev3zp3ht": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "로투스 룰렛",
        "descrKey": "immersiveLite",
        "lang": "vn",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qsf7bpfvyvbqolwp": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 3",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "onokyd4wn7uekbjx": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 바카라 B",
        "descrKey": "speed",
        "lang": "ko",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "scabetstack00001": {
        "gt": "scalablebetstackerbj",
        "gp": "evolution",
        "gv": "live",
        "title": "인피니트 베팅 스태커 블랙잭",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_infinitebetstackerblackjack_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_infinitebetstackerblackjack_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_infinitebetstackerblackjack_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/infinitebetstackerblackjack.svg"
        },
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 1000,
            "max": 500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/infinitebetstackerblackjack.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "SpeedBlackjack17": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 Q",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "pctte34dt6bqbtps": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 E",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "k2oswnib7jjaaznw": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "controlledsqueeze"
        },
        "title": "컨트롤 스퀴즈 바카라",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "rctf2h7wbtsmf7rs": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 31",
        "gConfig": {
            "seats": 7
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "qsf65xtoyvbqoaop": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 1",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "qgqrrnuqvltnvejx": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 V",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "PlatPrivBJ000002": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "플래티넘 프라이비트 블랙잭 2",
        "descrKey": "private-platinum",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 200000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "LightningBac0001:skfkfsc7s6sqf4ad": {
        "gt": "baccarat",
        "gst": "lightning",
        "gp": "evolution",
        "gv": "live",
        "title": "라이트닝 바카라",
        "descrKey": "lightning",
        "gConfig": {
            "lightning": true
        },
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_lightning_baccarat_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_lightning_baccarat_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_lightning_baccarat_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_baccarat.svg"
        },
        "frontendApp": "baccarat.lightning,baccarat.v1.lightning",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/lightning_baccarat.webp",
            "effect": "lightning"
        }
    },
    "rngXXXtremeLB001": {
        "gt": "rng-baccarat",
        "gst": "xxxtreme-lightning",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 XXXtreme 라이트닝 바카라",
        "descrKey": "xxxtremelightning",
        "frontendApp": "rng-baccarat.xtreme",
        "bl": {
            "min": 1000,
            "max": 250000
        },
        "published": true,
        "decorations": {
            "effect": "red-lightning"
        }
    },
    "rng-rt-european0:rkgst25nmanuhyzy": {
        "gt": "rng-roulette",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 룰렛",
        "frontendApp": "rng-roulette.horizon.preview",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true
    },
    "TRPTable00000001": {
        "gt": "trp",
        "gp": "evolution",
        "gv": "live",
        "title": "트리플 카드 포커",
        "frontendApp": "trp.v2",
        "bl": {
            "min": 500,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/poker_trp.webp"
        }
    },
    "ejx1a04w4ben0mou": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 포춘 VIP",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "KSSBJ00000000003": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 블랙잭 C",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 2
        },
        "opensAt": {
            "time": "07:00"
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 25000,
            "max": 2500000
        },
        "published": true
    },
    "oviiuqbivictqojy:sb6pnbd5uwfmgyt5": {
        "gt": "topcard",
        "gp": "evolution",
        "gv": "live",
        "title": "코리안 딜러 베이스볼 스튜디오",
        "lang": "ko",
        "gConfig": {
            "xSpotName": "무승부",
            "aSpotColor": "255,0,0",
            "bSpotColor": "14,94,255",
            "xSpotColor": "228,196,132"
        },
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "dragontiger.topCard,dragontiger.v0",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/topcard_koreanbaseballstudio.webp"
        }
    },
    "SpeedBlackjack04": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 D",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBac000001": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 A",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "h463tlq1rhl1lfr2": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 플래티넘 VIP",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "PlatPrivBJ000001": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "플래티넘 프라이비트 블랙잭 1",
        "descrKey": "private-platinum",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 200000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "olbinkuoylzayeoj:q5lasjjusox33giy": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 D",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 2000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "ps3uhj7gteskex37": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 F",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "mdkqfe74dctrhntj:q5lao46wsox3253c": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 C",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "PlatPrivBJ000003": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "플래티넘 프라이비트 블랙잭 3",
        "descrKey": "private-platinum",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 200000,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rng-dreamcatcher": {
        "gt": "rng-moneywheel",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 드림캐쳐",
        "frontendApp": "rng-moneywheel.horizon",
        "bl": {
            "min": 100,
            "max": 1000000
        },
        "published": true
    },
    "DoubleBallRou001:r4ke5a3qyj4j23pc": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "더블 볼 룰렛",
        "descrKey": "doubleBall",
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/roulette_doubleball.webp",
            "label": {
                "name": "w1300",
                "color": "#B9975B"
            }
        }
    },
    "SalPrivBac000012": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 L",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "ps3t7qv2teskeg4w": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 19",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "nxpj4wumgclak2lx": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 H",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "ESpeedBJ00000002": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 2",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "rgmen66rafqqimip": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "title": "Xclusive스피드 바카라 A",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "ImperialQuest001:rkgraunrmanuebas": {
        "gt": "moneywheel",
        "gp": "evolution",
        "gv": "live",
        "title": "임페리얼 퀘스트",
        "descrKey": "imperialQuest",
        "gConfig": {
            "asian": true
        },
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_imperialquest_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_imperialquest_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_imperialquest_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/imperialquest.svg"
        },
        "bl": {
            "min": 100,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/imperialquest.webp",
            "label": {
                "name": "exclusive",
                "color": "#B9975B"
            }
        }
    },
    "qckwjf2o52r9ikeb": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 D",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "o735fhvsaeaswamh": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 6",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "CrazyCoinFlip001:r6krlapp5rars6yd": {
        "gt": "crazycoinflip",
        "gp": "evolution",
        "gv": "live",
        "title": "크레이지 코인 플립",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_crazycoinflip_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_crazycoinflip_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_crazycoinflip_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/crazycoinflip.svg"
        },
        "bl": {
            "min": 100,
            "max": 1500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/crazycoinflip.webp"
        }
    },
    "o735ggd5iwsswcz7": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 7",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "lnofn2yl756qaezm": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP I",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 250000,
            "max": 2500000
        },
        "published": true
    },
    "XxxtremeLigh0001:skffw5ewb6zlsvix": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "XXXtreme 라이트닝 룰렛",
        "descrKey": "xxxtremeLightning",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_xxxtreme_roulette_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_xxxtreme_roulette_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_xxxtreme_roulette_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/xxxtreme_roulette.svg"
        },
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 3000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/xxxtreme_roulette.webp",
            "effect": "red-lightning"
        }
    },
    "m6mfsirtb7eafn5c": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP K",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "SpeedBlackjack14": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 N",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "otctxzr5fjyggijz": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "힌디 룰렛",
        "descrKey": "immersiveLite",
        "lang": "hi",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 2000000
        },
        "published": true
    },
    "gwbaccarat000001:sphm6ctmoxxg6xwi": {
        "gt": "baccarat",
        "gst": "goldenwealth",
        "gp": "evolution",
        "gv": "live",
        "title": "풍성한 골든 바카라",
        "descrKey": "goldenwealth",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_goldenwealth_baccarat_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_goldenwealth_baccarat_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_goldenwealth_baccarat_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/goldenwealth_baccarat.svg"
        },
        "frontendApp": "baccarat.goldenWealth,baccarat.v0,baccarat",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/goldenwealth_baccarat.webp"
        }
    },
    "mrfykemt5slanyi5": {
        "gt": "scalableblackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "인피니트 블랙잭",
        "frontendApp": "scalableblackjack",
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/powerscalableblackjack.webp"
        }
    },
    "SalPrivBac000013": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "살롱 프라이빗 바카라 M",
        "descrKey": "private",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000000,
            "max": 150000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "TopDice000000001:skffw5p7b6zlsv2c": {
        "gt": "topdice",
        "gp": "evolution",
        "gv": "live",
        "title": "축구 스튜디오 주사위",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_topdice_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_topdice_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_topdice_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/topdice.svg"
        },
        "bl": {
            "min": 500,
            "max": 2500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/topdice.webp"
        }
    },
    "SalPrivBJ0000012:r6a3f6hro7jy3kzt": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 L",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "rng-ptbaccarat01:rkgr77hvmanugi6s": {
        "gt": "rng-baccarat",
        "gst": "prosperitytree",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 번영의 나무 바카라",
        "frontendApp": "rng-baccarat.prosperity",
        "bl": {
            "min": 1000,
            "max": 2500000
        },
        "published": true
    },
    "SpeedBlackjack02": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 B",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBJ0000011:r6apkgw4o7jw3fzr": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 K",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "0mvn914lkmo9vaq8": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP A",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "EmperorSB0000001:r4mpsblnxd7aqbqw": {
        "gt": "sicbo",
        "gp": "evolution",
        "gv": "live",
        "title": "엠퍼러 식보",
        "lang": "zh",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "flag": "none"
    },
    "wzg6kdkad1oe7m5k:rkgquq7nmanudhos": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "프렌치 룰렛 골드",
        "descrKey": "french",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true
    },
    "rpjvbpsmmruw5jza": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 35",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "SpeedAutoRo00001": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed",
            "tVariant": "auto"
        },
        "title": "스피드 자동 룰렛",
        "descrKey": "speedAuto",
        "frontendApp": "roulette",
        "bl": {
            "min": 100,
            "max": 5000000
        },
        "published": true
    },
    "gazgtkid9h1b0dn9": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 실버 E",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "o735hfcqauecwjxp": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 8",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 100000,
            "max": 2500000
        },
        "published": true
    },
    "oqic5sqbt25322zm": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 베타",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "KSSBJ00000000001": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "코리안 스피드 블랙잭 A",
        "descrKey": "speed",
        "lang": "ko",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 20000,
            "max": 2500000
        },
        "published": true
    },
    "rng-rt-lightning": {
        "gt": "rng-roulette",
        "gp": "evolution",
        "gv": "rng",
        "title": "1인칭 라이트닝 룰렛",
        "descrKey": "lightning",
        "frontendApp": "rng-roulette.horizon.preview",
        "bl": {
            "min": 200,
            "max": 2000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "BacBo00000000001": {
        "gt": "bacbo",
        "gp": "evolution",
        "gv": "live",
        "title": "백보",
        "hero": {
            "desktop": "https://bshots.egcvi.com/thumbnail/hero_bacbo_desktop.jpg",
            "mobile": "https://bshots.egcvi.com/thumbnail/hero_bacbo_mobile.png",
            "video": "https://bshots.egcvi.com/thumbnail/hero_bacbo_video.mp4",
            "logo": "https://bshots.egcvi.com/thumbnail/bacbo.svg"
        },
        "bl": {
            "min": 1000,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/bacbo.webp"
        }
    },
    "qhhjdnovai4a3a6k": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "힌디어 스피드 바카라 A",
        "descrKey": "speed",
        "lang": "hi",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "puu4yfymic3reudn": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "엠퍼러 스피드 바카라 A",
        "descrKey": "speed",
        "lang": "zh",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true,
        "flag": "none"
    },
    "p2f2zs26tc2mu7r5": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 I",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "BonsaiBacc000001": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "본자이 스피드 바카라 A",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 20000000
        },
        "published": true
    },
    "ESpeedBJ00000006": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 6",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "p2f25gsom2tmwmpn": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 VIP 블랙잭 J",
        "descrKey": "speed",
        "gConfig": {
            "seats": 3,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "InstantSSB000001": {
        "gt": "sicbo",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 슈퍼 식보",
        "descrKey": "speedsupersicbo",
        "bl": {
            "min": 200,
            "max": 1000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/speedsupersicbo.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    },
    "xphpcthv8e6ivc16": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 B",
        "gConfig": {
            "seats": 1
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 10000,
            "max": 2500000
        },
        "published": true
    },
    "ESpeedBJ00000005": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 5",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "7x0b1tgh7agmf6hv:rkgq3qrlmanudwdq": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "이머지브 룰렛",
        "descrKey": "immersive",
        "frontendApp": "roulette",
        "bl": {
            "min": 500,
            "max": 5000000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/immersive_roulette.webp"
        }
    },
    "pdk5xfrkjkgepmlq": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 9",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "LightningHindi01": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "힌디 라이트닝 룰렛",
        "descrKey": "lightning",
        "lang": "hi",
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 2000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "ESpeedBJ00000004": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "Evo 스피드 블랙잭 4",
        "descrKey": "speed",
        "gConfig": {
            "seats": 2
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 15000,
            "max": 2500000
        },
        "published": true
    },
    "SalPrivBJ0000008:q5laq4hgsox33cxx": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "살롱 프라이빗 블랙잭 H",
        "descrKey": "private",
        "gConfig": {
            "seats": 7,
            "betBehindDisabled": true
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 1000000,
            "max": 10000000
        },
        "published": true,
        "decorations": {
            "label": {
                "name": "salon_prive",
                "color": "#B9975B"
            }
        }
    },
    "oviijmmqdaatpvon:skffw5ewb6zlsvjk": {
        "gt": "roulette",
        "gp": "evolution",
        "gv": "live",
        "title": "코리안 딜러 라이트닝 룰렛",
        "descrKey": "lightning",
        "lang": "ko",
        "opensAt": {
            "time": "06:00"
        },
        "frontendApp": "roulette",
        "bl": {
            "min": 200,
            "max": 3000000
        },
        "published": true,
        "decorations": {
            "effect": "lightning"
        }
    },
    "doasaloon0000001:q5lir3svsox4rsra": {
        "gt": "deadoralivesaloon",
        "gp": "evolution",
        "gv": "live",
        "title": "죽음 또는 생존: 사룬",
        "frontendApp": "deadalive.v0",
        "bl": {
            "min": 100,
            "max": 500000
        },
        "published": true,
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/deadoralivesaloon.webp"
        }
    },
    "rpju2x53mruw4otv": {
        "gt": "blackjack",
        "gp": "evolution",
        "gv": "live",
        "title": "블랙잭 VIP 33",
        "gConfig": {
            "seats": 3
        },
        "frontendApp": "blackjack.v3",
        "bl": {
            "min": 50000,
            "max": 2500000
        },
        "published": true
    },
    "rep5iuhinyjmalz4": {
        "gt": "baccarat",
        "gp": "evolution",
        "gv": "live",
        "flags": {
            "gVariant": "speed"
        },
        "title": "스피드 바카라 10",
        "descrKey": "speed",
        "frontendApp": "baccarat.regular,baccarat.v1.regular",
        "bl": {
            "min": 1000,
            "max": 5000000
        },
        "published": true
    },
    "KoPTBaccarat0001:sojd5hbts6sujgrc": {
        "gt": "baccarat",
        "gst": "prosperitytree",
        "gp": "evolution",
        "gv": "live",
        "title": "코리안 번영의 나무 바카라",
        "descrKey": "prosperitytree",
        "lang": "ko",
        "frontendApp": "baccarat.prosperity",
        "bl": {
            "min": 1000,
            "max": 2500000
        },
        "published": true,
        "flag": "none",
        "decorations": {
            "logo": "https://bshots.egcvi.com/thumbnail/prosperitytreebaccarat.webp",
            "label": {
                "name": "new",
                "color": "#EA1C44"
            }
        }
    }
}




const asd = () => {
    let result = []
    let allKeys = {}
    for(let key in tables){
        if(key === undefined){
            continue
        }
        let __ = key.split(":")
        if(__.length === 1){    
            allKeys[__[0].toString()] =  null
        }else{
            allKeys[__[0].toString()] = __[1]
        }
    }
    const jsonContent = JSON.stringify(allKeys );
    fs.writeFileSync('tables.json', jsonContent);
    return allKeys
    const chunkSize = Math.ceil(allKeys.length / 38)
    for(let i = 0; i < allKeys.length; i += chunkSize) {
        result.push(allKeys.slice(i, i + chunkSize))
    }

    // Convert to JSON and write to file

    
    return result
}
 
console.log( asd())

 