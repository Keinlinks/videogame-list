import { PlatformModel } from "./platformModel";

export interface VideogameSummaryModel {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, any>;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, any>;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: {
        id: number;
        slug: string;
        name: string;
    };
    platforms: PlatformModel[];
}

export interface VideogameDetailsModel extends VideogameSummaryModel {
  name_original: string;
  description: string;
  background_image_additional: string;
  website: string;
  reactions: Record<string, any>;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
}