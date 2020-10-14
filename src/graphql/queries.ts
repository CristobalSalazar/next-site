export const aboutQuery = `
{
  about {
    title
    subtitle
    paragraphs { content }
    education { content }
    profile_pic { url }
    skillsets {
      title
      skills { content }
    }
  }
}`;

export const portfolioQuery = `
{
	about {
    title
  }
  projects {
    title
    description
    link
    files {
      url
    }
  }
}`;
