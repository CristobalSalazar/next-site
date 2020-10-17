import Button from "./Button";
import Text from "./Text";

const Grid: React.FC = ({ children }) => (
  <div className="grid grid-cols-3 gap-12 md:mb-0 md:block sm:block">
    {children}
  </div>
);

interface WelcomeProps {
  profilePicUrl: string;
  slogan: string;
  paragraph: string;
}
const Welcome: React.FC<WelcomeProps> = ({
  profilePicUrl,
  slogan,
  paragraph,
}) => (
  <Grid>
    <img
      className="object-cover w-64 h-64 mx-auto border rounded-full shadow-xl border-dark"
      src={profilePicUrl}
      alt="profile_pic"
    />
    <div className="col-span-2">
      <h2 className="mb-3 text-4xl text-dark">{slogan}</h2>
      <Text>{paragraph}</Text>
      <div className="flex justify-end mt-6">
        <Button>Contact Me</Button>
      </div>
    </div>
  </Grid>
);
export default Welcome;
