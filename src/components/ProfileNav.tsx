import Nav from "./Nav";

interface ProfileNavProps {
  title: string;
  activeLinkName: string;
}
const ProfileNav: React.FC<ProfileNavProps> = ({ activeLinkName, title }) => (
  <Nav
    title={title}
    links={[
      {
        name: "About",
        route: "/",
        active: activeLinkName === "About",
      },
      {
        name: "Portfolio",
        route: "/portfolio",
        active: activeLinkName === "Portfolio",
      },
    ]}
  />
);
export default ProfileNav;
