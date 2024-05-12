// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type Project = {
  slug: string;
  imageUrl: string;
  title: string;
  desc: string;
  overview: string;
  link: string;
  githubLink: string;
  tools: string[];
};
