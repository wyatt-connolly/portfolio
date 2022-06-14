export type Project = {
  cover_image?: object;
  image_gallery?: { images: [{ alt: string }] };
  name: string;
  publishedAt?: string;
  body: [object];
  summary?: [object];
  _id?: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  slug: { current: string };
  _key?: string;
};
