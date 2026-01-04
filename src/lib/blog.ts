import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from "@/types/blog";

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    if(!fs.existsSync(blogDirectory)) {
        return [];
    }
    // Get file names under /content/blog
  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName, index) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data with the slug and id
    return {
      id: index + 1,
      slug,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'slug'>),
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  if(limit >= allPosts.length) {
    return allPosts;
  } else {
    return allPosts.slice(0, limit);
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const matterResult = matter(fileContents);
    
    return {
      id: 0, // We'll calculate this if needed
      slug,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'slug'>),
      content: matterResult.content,
    };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}