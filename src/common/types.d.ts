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
