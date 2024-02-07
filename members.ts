import { Member } from "./app/types";

export const members: Member[] = [
  {
    id: "harayama",
    name: "Harayama Takuya",
    role: "CTO",
    bio:
      "大分県臼杵市出身、1989年生まれ。東京理科大学理学部卒業後、大手SIerでのCOBOLプログラマー、ITベンチャー企業執行役員を経てHAB&Co.にJoin。RubyonRails,Python,Nuxt.jsを中心に、Webアプリケーション開発や機械学習領域を得意とする。アジャイル思考の現役エンジニアでありながら、CTOとして組織設計やマネジメント業務も幅広くこなす。業務外では私塾にてエンジニア育成も行なう。",
    avatarSrc: "/avatars/harayama.jpg",
    sources: [
      "https://toaru-kaihatsu.com/feed/",
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "",
    githubUsername: "",
    websiteUrl: "https://toaru-kaihatsu.com/",
  },
  {
    id: "s-takuya",
    name: "Sato Takuya",
    role: "EM",
    bio:
      "",
    avatarSrc: "/avatars/s-takuya.jpg",
    sources: [
      "https://wool-blog-astroship.vercel.app/rss.xml",
    ],
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "",
    websiteUrl: "",
  },
];
