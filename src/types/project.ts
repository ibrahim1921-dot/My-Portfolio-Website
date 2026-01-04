export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  content?: string;
}