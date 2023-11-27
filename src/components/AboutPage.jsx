import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <h1>Testing about section</h1>
      <p>
        Back to <Link to='/'>Homepage</Link>{" "}
      </p>
    </>
  );
};

export default AboutSection;
