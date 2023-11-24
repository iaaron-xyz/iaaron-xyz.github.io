import Sections from "./Sections";
import CardsGroup from "./ProjectCards";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className='w-4/12 flex flex-col items-center'>
      <HomeHeader />
      <SocialLinks />
      <ContactMail />
      <ContentContainer />
      <Footer />
    </div>
  );
};

const HomeHeader = () => {
  return (
    <>
      <div className='my-8 w-24 h-24 bg-teal-600 rounded-full'></div>
      <h1 className='mb-2 text-3xl'>Name Lastname</h1>
      <h2 className='text-xl mb-4x dark:text-slate-400'>Subtitle header</h2>
      <p className='mt-2 dark:text-green-400'>
        &#9679; Available for new opportunities
      </p>
    </>
  );
};

const SocialLinks = () => {
  return (
    <div className='my-6'>
      <a href='' className='m-4'>
        Linkedin
      </a>
      <a href='' className='m-4'>
        Github
      </a>
      <a href='' className='m-4'>
        Artstation
      </a>
    </div>
  );
};

const ContactMail = () => {
  return (
    <div>
      <button className='mx-4 my-2 px-6 py-1 bg-slate-100 rounded-md dark:text-slate-700'>
        Contact Me
      </button>
      or
      <button className='mx-4 my-2 px-6 py-1 bg-slate-800 text-slate-200 rounded-md dark:bg-slate-950'>
        Copy email address
      </button>
    </div>
  );
};

const ContentContainer = () => {
  return (
    <div className='flex flex-col align-top'>
      <HomeAbout />
      <HomeWorks />
    </div>
  );
};

const HomeAbout = () => {
  return (
    <Sections
      title='About me'
      content='I am iaaron, a Front-end React developer, data scientist, and 3D game
      artist who lives happily at the intersection of science, art and
      programming based in Seul, Korea.'
    />
  );
};

const HomeWorks = () => {
  return (
    <Sections
      title='Projects'
      // content={<CardsGroup title='Project 1' image='image cover' />}
      content={<CardsGroup quantity={3} />}
    />
  );
};

export default Homepage;
