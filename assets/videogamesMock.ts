import { PaginatedResponseModel } from "@/features/videogames/data/models/paginatedResponseModel";
import { VideogameDetailsModel, VideogameSummaryModel } from "@/features/videogames/data/models/videogameModel";

export const videogameMock:VideogameDetailsModel ={
    id: 1,
    slug: "the-legend-of-zelda-breath-of-the-wild",
    name: "The Legend of Zelda: Breath of the Wild",
    released: "2017-03-03",
    tba: false,
    background_image: "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    rating: 4.9,
    rating_top: 5,
    ratings: {
        exceptional: 90,
        recommended: 8,
        meh: 1,
        skip: 1,
    },
    ratings_count: 100,
    reviews_text_count: "2500",
    added: 50000,
    added_by_status: {
        playing: 12000,
        yet: 10000,
        owned: 25000,
        beaten: 20000,
        dropped: 1000,
        toplay: 5000,
    },
    metacritic: 97,
    playtime: 50,
    suggestions_count: 300,
    updated: "2024-03-01",
    esrb_rating: {
        id: 2,
        slug: "everyone-10-plus",
        name: "Everyone 10+",
    },
    platforms: [
        {
            platform: {
                id: 1,
                name: "Nintendo Switch",
                slug: "nintendo-switch",
            },
            released_at: '',
            requirements: {
                minimum: '',
                recommended: ''
            }
        },
    ],
    name_original: "",
    description: "",
    background_image_additional: "",
    website: "",
    reactions: {},
    screenshots_count: 0,
    movies_count: 0,
    creators_count: 0,
    achievements_count: 0,
    parent_achievements_count: "",
    reddit_url: "",
    reddit_name: "",
    reddit_description: "",
    reddit_logo: "",
    reddit_count: 0,
    twitch_count: "",
    youtube_count: "",
    alternative_names: [],
    metacritic_url: "",
    parents_count: 0,
    additions_count: 0,
    game_series_count: 0
};

export const  videogameListMock:PaginatedResponseModel<VideogameSummaryModel> =  {
    count: 10,
    next: null,
    previous: null,
    results:[
        {
            id: 1,
            slug: "mario-kart-8-deluxe",
            name: "Mario Kart 8 Deluxe",
            released: "2025-03-16",
            tba: true,
            background_image: "https://juegosdigitaleschile.com/files/images/productos/1637861249-mario-kart-8-deluxe-nintendo-switch.jpg",
            rating: 0,
            rating_top: 0,
            ratings: {},
            ratings_count: 0,
            reviews_text_count: "string",
            added: 0,
            added_by_status: {},
            metacritic: 95,
            playtime: 0,
            suggestions_count: 0,
            updated: "2025-03-16T22:36:15Z",
            esrb_rating: {
                id: 0,
                slug: "everyone",
                name: "Everyone"
            },
            platforms: []
        },
        {
            id: 2,
            slug: "the-legend-of-zelda-tears-of-the-kingdom",
            name: "The Legend of Zelda: Tears of the Kingdom",
            released: "2023-05-12",
            tba: false,
            background_image: "https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1920/ncom/en_US/games/switch/t/the-legend-of-zelda-tears-of-the-kingdom-switch/hero",
            rating: 4.9,
            rating_top: 5,
            ratings: {
                exceptional: 95,
                recommended: 4,
                meh: 1,
                skip: 0
            },
            ratings_count: 15000,
            reviews_text_count: "5000",
            added: 100000,
            added_by_status: {
                playing: 25000,
                yet: 10000,
                owned: 70000,
                beaten: 50000,
                dropped: 2000,
                toplay: 5000
            },
            metacritic: 96,
            playtime: 80,
            suggestions_count: 200,
            updated: "2024-03-17T10:00:00Z",
            esrb_rating: {
                id: 1,
                slug: "everyone-10-plus",
                name: "Everyone 10+"
            },
            platforms: [
                {
                    platform: { id: 1, name: "Nintendo Switch", slug: "nintendo-switch" },
                    released_at: '',
                    requirements: {
                        minimum: '',
                        recommended: ''
                    }
                }
            ]
        },
        {
            id: 3,
            slug: "elden-ring",
            name: "Elden Ring",
            released: "2022-02-25",
            tba: false,
            background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg?t=1675859729",
            rating: 4.8,
            rating_top: 5,
            ratings: {
                exceptional: 90,
                recommended: 7,
                meh: 2,
                skip: 1
            },
            ratings_count: 20000,
            reviews_text_count: "7000",
            added: 150000,
            added_by_status: {
                playing: 30000,
                yet: 15000,
                owned: 90000,
                beaten: 60000,
                dropped: 5000,
                toplay: 8000
            },
            metacritic: 95,
            playtime: 120,
            suggestions_count: 300,
            updated: "2024-03-17T11:45:00Z",
            esrb_rating: {
                id: 2,
                slug: "mature",
                name: "Mature 17+"
            },
            platforms: [
                {
                    platform: { id: 1, name: "Nintendo Switch", slug: "nintendo-switch" },
                    released_at: '',
                    requirements: {
                        minimum: '',
                        recommended: ''
                    }
                }
            ]
        },
        {
            id: 2,
            slug: "god-of-war-ragnarok",
            name: "God of War: Ragnarok",
            released: "2022-11-09",
            tba: false,
            background_image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/god-war-ragnarok-oda-mitologia-nordica-digna-dioses-asgard-2862421.jpg?tf=3840x",
            rating: 4.9,
            rating_top: 5,
            ratings: {
                exceptional: 95,
                recommended: 4,
                meh: 1,
                skip: 0
            },
            ratings_count: 25000,
            reviews_text_count: "8000",
            added: 120000,
            added_by_status: {
                playing: 20000,
                yet: 10000,
                owned: 80000,
                beaten: 50000,
                dropped: 1500,
                toplay: 5000
            },
            metacritic: 94,
            playtime: 50,
            suggestions_count: 200,
            updated: "2024-03-17T10:00:00Z",
            esrb_rating: {
                id: 2,
                slug: "mature",
                name: "Mature 17+"
            },
            platforms: [
                {
                    platform: { id: 1, name: "Nintendo Switch", slug: "nintendo-switch" },
                    released_at: '',
                    requirements: {
                        minimum: '',
                        recommended: ''
                    }
                }
            ]
        },
        {
            id: 3,
            slug: "halo-infinite",
            name: "Halo Infinite",
            released: "2021-12-08",
            tba: false,
            background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/capsule_616x353.jpg?t=1677192028",
            rating: 4.5,
            rating_top: 5,
            ratings: {
                exceptional: 85,
                recommended: 10,
                meh: 3,
                skip: 2
            },
            ratings_count: 18000,
            reviews_text_count: "6500",
            added: 90000,
            added_by_status: {
                playing: 25000,
                yet: 8000,
                owned: 60000,
                beaten: 30000,
                dropped: 4000,
                toplay: 5000
            },
            metacritic: 87,
            playtime: 60,
            suggestions_count: 250,
            updated: "2024-03-17T11:30:00Z",
            esrb_rating: {
                id: 2,
                slug: "teen",
                name: "Teen"
            },
            platforms: [
                {
                    platform: { id: 1, name: "Nintendo Switch", slug: "nintendo-switch" },
                    released_at: '',
                    requirements: {
                        minimum: '',
                        recommended: ''
                    }
                }
            ]
        },
        {
            id: 4,
            slug: "final-fantasy-xvi",
            name: "Final Fantasy XVI",
            released: "2023-06-22",
            tba: false,
            background_image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/3007/lgFVhRm5BfoX02pRUt3lSmLV.png",
            rating: 4.7,
            rating_top: 5,
            ratings: {
                exceptional: 90,
                recommended: 7,
                meh: 2,
                skip: 1
            },
            ratings_count: 22000,
            reviews_text_count: "7000",
            added: 110000,
            added_by_status: {
                playing: 18000,
                yet: 9000,
                owned: 75000,
                beaten: 45000,
                dropped: 3000,
                toplay: 6000
            },
            metacritic: 88,
            playtime: 70,
            suggestions_count: 275,
            updated: "2024-03-17T12:15:00Z",
            esrb_rating: {
                id: 2,
                slug: "mature",
                name: "Mature 17+"
            },
            platforms: [
                {
                    platform: { id: 1, name: "Nintendo Switch", slug: "nintendo-switch" },
                    released_at: '',
                    requirements: {
                        minimum: '',
                        recommended: ''
                    }
                }
            ]
        }
    ]
}