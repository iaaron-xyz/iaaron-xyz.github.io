import Sections from "./layout/Sections";
import CardsGroup from "./layout/ProjectCards";
import ArtstationIcon from "./icons/ArtstationIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import BehanceIcon from "./icons/BehanceIcon";
import AtIcon from "./icons/AtIcon";
import CopyPasteIcon from "./icons/CopyPasteIcon";

const Homepage = () => {
  return (
    <div className='content-width flex flex-col items-center'>
      <HomeHeader />
      <SocialLinks />
      <ContactMail />
      <ContentContainer />
    </div>
  );
};

const HomeHeader = () => {
  return (
    <>
      <div className='my-8 w-24 h-24 bg-teal-600 rounded-full'></div>
      <h1 className='mb-2 text-3xl'>Name Lastname</h1>
      <h2 className='text-xl mb-4x dark:text-slate-400'>Subtitle header</h2>
      <p className='mt-2 dark:text-emerald-500'>
        <span className='mx-2 dark:text-green-300'>&#9679;</span> Available for
        new opportunities
      </p>
    </>
  );
};

const SocialLinks = () => {
  return (
    <div className='[&>a]:mx-1 mt-8 mb-6 flex text-slate-400'>
      <a href='' className='flex flex-col'>
        <LinkedinIcon className={"logo-stroke home-logo hover:stroke-white"} />
      </a>
      <a
        href=''
        className='flex flex-col hover:text-white hover:fill-slate-300'
      >
        <GithubIcon
          className={
            "logo-stroke home-logo fill-slate-400 hover:stroke-slate-300"
          }
        />
      </a>
      <a href='' className='flex flex-col'>
        <ArtstationIcon
          className={"logo-stroke home-logo dark:hover:stroke-slate-300"}
        />
      </a>
      <a href='' className='flex flex-col'>
        <BehanceIcon
          className={"logo-fill home-logo dark:hover:fill-slate-300"}
        />
      </a>
    </div>
  );
};

const ContactMail = () => {
  return (
    <div className='flex items-center my-4'>
      <button className='flex items-center mx-4 my-2 px-8 py-2 bg-slate-100 rounded-md dark:text-slate-700 dark:hover:bg-slate-200'>
        Contact Me
        <AtIcon className={"h-5 fill-slate-400 stroke-2 ml-4"} />
      </button>
      or
      <button className='flex items-center mx-4 my-2 px-8 py-2 bg-slate-800 text-slate-200 rounded-md dark:bg-slate-800 dark:hover:bg-slate-700'>
        Copy email address
        <CopyPasteIcon className={"h-5 fill-slate-500 stroke-2 ml-4"} />
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
  return <Sections title='Projects' content={<CardsGroup quantity={3} />} />;
};

export default Homepage;
