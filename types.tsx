export type Article = {
  author: string;
  title: string;
  article_id: number;
  topic: string;
  created_at: Date;
  votes: number;
  body: string;
  comment_count: number;
};

export type Comment = {
  comment_id: number;
  votes: number;
  created_at: Date;
  author: string;
  body: string;
};

export type Topic = { slug: string; description: string };
