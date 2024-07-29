export interface Project {
  hero: Hero;
  video: Video;
  project: ProjectInformation;
  category: string[];
}

export interface Hero {
  name: string;
  description: string;
  image: string;
}

export interface ProjectInformation {
  issue: string;
  solution: string;
  team: string;
  technologyIcons: string[];
}

export interface Video {
  videoId: string;
  thumb: string;
}
