import { IndexProps } from "../pages";
import { usePexels } from "../hooks/usePexels";
import { useUnsplash } from "../hooks/useUnsplash";
import { Project } from "../dto/text.dto";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Ne assum fierent his, cibo eruditi necessitatibus id vix, cum tantas audiam reprehendunt in. His cu probo blandit. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Ridens nostro perfecto ad cum, debet omnes splendide sit eu, vix an iisque dissentias. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Sed no sumo stet, est ei quodsi feugait liberavisse, in pro quot facete definitiones. Electram intellegat voluptaria et eam, eam ex aperiri temporibus scriptorem.";

export async function getDefaultIndexProps(): Promise<IndexProps> {
  const pex = usePexels();
  const res = await pex.getPopularVideos();
  const data: { videos: any[] } = await res.json();
  const videoLinks = data.videos.slice(0, 6).map((x) => x.video_files[0].link);

  let profile = useUnsplash.getPhotoSrc("OhKElOkQ3RE", 600, 600);
  let bg = useUnsplash.getPhotoSrc("OhKElOkQ3RE", 1080, 720);
  const projects: Project[] = videoLinks.map((link, i) => ({
    title: `Project ${i}`,
    description: lorem,
    files: [{ url: link }],
    link: "#",
  }));
  return {
    about: {
      title: "John Doe",
      featured_project: projects[0],
      subtitle: "Professional Web Developer",
      my_email: "johndoe@gmail.com",
      paragraph: lorem.substring(0, lorem.length / 3),
      background_img: { url: bg },
      profile_pic: { url: profile },
      slogan: "Lorem ipsum dolor sit amet.",
      projects,
    },
  };
}
