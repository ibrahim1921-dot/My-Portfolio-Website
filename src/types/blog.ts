export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
  content?: string;
};