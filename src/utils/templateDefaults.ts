import { IndexProps } from "../pages";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Ne assum fierent his, cibo eruditi necessitatibus id vix, cum tantas audiam reprehendunt in. His cu probo blandit. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Ridens nostro perfecto ad cum, debet omnes splendide sit eu, vix an iisque dissentias. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Sed no sumo stet, est ei quodsi feugait liberavisse, in pro quot facete definitiones. Electram intellegat voluptaria et eam, eam ex aperiri temporibus scriptorem.";

export const about: IndexProps = {
  about: {
    title: "John Doe",
    subtitle: "Proffessional Developer",
    paragraphs: [
      {
        content: lorem.substring(0, lorem.length / 3),
      },
      {
        content: lorem.substring(0, lorem.length / 3),
      },
    ],
    profile_pic: {
      url:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
    education: [
      { content: "Bachelor's Degree in Graphic Design, University of City" },
    ],
    skillsets: [
      {
        title: "Programs",
        skills: [
          { content: "Adobe Photoshop" },
          { content: "Adobe Dreamweaber" },
          { content: "Microsoft Office" },
        ],
      },
      {
        title: "Languages",
        skills: [
          { content: "English" },
          { content: "Spanish" },
          { content: "French" },
        ],
      },
    ],
  },
};
