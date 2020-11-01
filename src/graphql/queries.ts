export const aboutQuery = `
{
  about {
    title
    my_email
    subtitle
    paragraph
    slogan 
    profile_pic { url }
    background_img { url }
    featured_project { files { url } }
    projects {
      title
      files {
        url
      }
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
