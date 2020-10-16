import { IndexProps } from "../pages";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Ne assum fierent his, cibo eruditi necessitatibus id vix, cum tantas audiam reprehendunt in. His cu probo blandit. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Ridens nostro perfecto ad cum, debet omnes splendide sit eu, vix an iisque dissentias. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Sed no sumo stet, est ei quodsi feugait liberavisse, in pro quot facete definitiones. Electram intellegat voluptaria et eam, eam ex aperiri temporibus scriptorem.";

const portfolioImgs: { [indx: number]: string } = {
  1: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
  2: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
  3: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
};

const imgs = {
  profile:
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
  cover:
    "https://images.unsplash.com/photo-1571851569301-eb8912014c51?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  project: "https://source.unsplash.com/random",
};

export const about: IndexProps = {
  about: {
    title: "John Doe",
    subtitle: "Professional Web Developer",
    paragraph: lorem.substring(0, lorem.length / 3),
    background_img: { url: imgs.profile },
    profile_pic: { url: imgs.profile },
    slogan: "Lorem ipsum dolor sit amet.",
    projects: [
      {
        title: "Project 2",
        description: lorem,
        files: [{ url: imgs.project }],
        link: "#",
      },
      {
        title: "Project 2",
        description: lorem,
        files: [
          {
            url:
              "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
        ],
        link: "#",
      },
      {
        title: "Project 3",
        description: lorem,
        files: [{ url: imgs.project }],
        link: "#",
      },
      {
        title: "Project 4",
        description: lorem,
        files: [{ url: imgs.project }],
        link: "#",
      },
      {
        title: "Project 5",
        description: lorem,
        files: [{ url: imgs.project }],
        link: "#",
      },
      {
        title: "Project 6",
        description: lorem,
        files: [{ url: imgs.project }],
        link: "#",
      },
    ],
  },
};

export const portfolio = {};
