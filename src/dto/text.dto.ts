export type Paragraph = { content: string };
export type SkillSet = { title: string; skills: Paragraph[] };
export type Project = {
  title: string;
  description: string;
  link: string;
  files: [{ url: string }];
};
