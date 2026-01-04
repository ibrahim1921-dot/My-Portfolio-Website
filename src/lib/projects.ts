import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): Project[] {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName, index) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id: index + 1,
        slug,
        ...(matterResult.data as Omit<Project, 'id' | 'slug' | 'content'>),
        content: matterResult.content,
      } as Project;
    });

  // Sort by date (newest first)
  return allProjects.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getFeaturedProjects(limit: number = 3): Project[] {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter((project) => project.featured).slice(0, limit);
  if (featuredProjects.length < limit) {
    const nonFeaturedProjects = allProjects.filter((project) => !project.featured);
    return featuredProjects.concat(nonFeaturedProjects.slice(0, limit - featuredProjects.length));
  } else {
    return featuredProjects;
  }
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: 0,
      slug,
      ...(matterResult.data as Omit<Project, 'id' | 'slug'>),
      content: matterResult.content,
    };
  } catch {
    return null;
  }
}

export function getProjectsByCategory(category: string): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.category === category);
}