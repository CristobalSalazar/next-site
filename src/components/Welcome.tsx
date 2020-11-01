import Button from "./Button";
import Text from "./Text";

const Grid: React.FC = ({ children }) => (
  <div className="grid grid-cols-3 gap-12 md:mb-0 md:block sm:block sm:mx-auto sm:px-3">
    {children}
  </div>
);

interface WelcomeProps {
  profilePicUrl: string;
  slogan: string;
  paragraph: string;
  email: string;
}
const Welcome: React.FC<WelcomeProps> = ({
  profilePicUrl,
  slogan,
  paragraph,
  email,
}) => (
  <Grid>
    <img
      className="object-cover w-64 h-64 mx-auto border rounded-full shadow-xl border-dark sm:mb-6"
      src={profilePicUrl}
      alt="profile_pic"
    />
    <div className="col-span-2">
      <h2 className="mb-3 text-4xl sm:mb-6 text-dark sm:text-center sm:text-3xl">
        {slogan}
      </h2>
      <Text>{paragraph}</Text>
      <div className="flex justify-end mt-6">
        <Button>
          <a href={`mailto:${email}`}>Contact Me</a>
        </Button>
      </div>
    </div>
  </Grid>
);
export default Welcome;
