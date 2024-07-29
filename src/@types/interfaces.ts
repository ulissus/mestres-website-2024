export interface ICategoryResponse {
  id: string;
  name: string;
}

export interface ICategory {
  value: string;
  label: string;
}

export interface IUsersResponse {
  results: Users[];
  total: number;
  page: number;
  limit: number;
}

export interface Users {
  id: string;
  name: string;
  bio: null | string;
  avatar: string;
  role: string;
}

export interface IUser {
  value: string;
  label: string;
}

export interface IPublicationResponse {
  results: IPublication[];
  total: number;
  page: number;
  limit: number;
}

export interface IPublication {
  id: string;
  title: string;
  category_id: string;
  category: Category;
  user_id: string;
  user: User;
  description: string;
  cover: string;
  thumbnail: string;
  date: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
}

export interface LandingPage {
  id: string;
  title: string;
  subtitle: string;
  landing_info: Footer[];
  url: string;
  script_body: string | null;
  script_head: string | null;
  event_snippet: string | null;
  landing_projects: Project[];
  landing_image: string;
}

export interface Project {
  project_id: string;
  projects: {
    id: string;
    title: string;
    description: string;
    name: string;
    image: string;
  };
}

export interface Footer {
  footer_title: string;
  footer_subtitle: string;
}
