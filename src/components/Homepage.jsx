import Sections from "./Sections";

const Homepage = () => {
  return (
    <div className='w-5/12 flex flex-col items-center'>
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
      <h2 className='text-xl mb-4'>Subititle header</h2>
      <p>Available for new opportunities</p>
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
      <button className='mx-4 my-2 px-6 py-1 bg-slate-100 rounded-md'>
        Contact Me
      </button>
      or
      <button className='mx-4 my-2 px-6 py-1 bg-slate-800 text-slate-200 rounded-md'>
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
  return <Sections title='Projects' content='Works here.' />;
};

export default Homepage;
