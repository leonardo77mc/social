export interface IUsernameInfo {
  username: string;
  followers: number;
  avatar: string;
  biography: string;
  is_private: string;
  id: number;
  cursor: string;
}

export interface IPostResponse {
  cursor: string;
  posts: IPost[];
}

export interface IPost {
  "shortcode": string,
  "likes": number,
  "comments": number,
  "display_url": string,
  "is_video": boolean,
  "video_view_count": number | null;
  "selected"?: boolean;
}
