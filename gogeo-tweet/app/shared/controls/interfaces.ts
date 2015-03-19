module gogeo {
  export interface Query {
    build(): any;
  }

  export interface IGeomSpace {
    source: string;
    type: string;
    coordinates: Array<Array<Array<number>>>;
  }

  export interface IBucket {
    key: string;
    doc_count: number;
  }

  export interface IHashtagResult {
    doc_total: number;
    buckets: Array<IBucket>;
  }

  export interface ITweet {
    created_at: string;
    id: string;
    text: string;
    source: string;
    truncated: boolean;
    in_reply_to_status_id: number;
    in_reply_to_user_id: number;
    in_reply_to_screen_name: string;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
    timestamp_ms: number;
    "user.name": string;
    "user.screen_name": string;
    "user.profile_image_url": string;
  }

  export interface IDateRange {
    start: Date;
    end: Date;
  }
}