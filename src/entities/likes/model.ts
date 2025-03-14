export interface Like {
  likeId: number;
  userId: number;
  articleId: number;
}

export interface CreateLikeData {
  articleId: number;
}
