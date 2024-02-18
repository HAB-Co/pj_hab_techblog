export type Member = {
  id: string;
  name: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  githubUsername?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

export type PostItem = {
  guid: string;
  title: string;
  name: string;
  link: string;
  pubDate: string;
  categories?: string[];
  avatarSrc?: string;
};
