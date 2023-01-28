declare interface AddCommentJ {
  comment: string;
  github: string;
  userName: string | null | undefined;
  videoId: string;
  userId: string | null | undefined;
  createdAt: Date;
  date: string;
}

declare interface NewCommentsJ extends AddCommentJ {
  id: string;
}

declare interface BookmarkH {
  id?:string; 
  userId: string | null | undefined;
  videoId: string;
  thumbnail: string;
  videoTitle: string;
  date: string;
  channelTitle: string;
  video: string;
}