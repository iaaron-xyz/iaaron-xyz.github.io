import Sections from "./Sections";

const AboutPage = () => {
  return (
    <div className='my-16 flex flex-col w-4/12'>
      <h1 className='text-3xl'>About</h1>
      <h2 className='text-2xl mb-8 dark:text-slate-500'>
        I love to work at the intersection of science, art and programming. Get
        to know my trajectory, the stuff I do and my areas of specialization.
      </h2>
      <AboutPhoto />
      <AboutMeIntro />
    </div>
  );
};

const AboutPhoto = () => {
  return (
    <div className='w-full h-72 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6'></div>
  );
};

const AboutMeIntro = () => {
  return (
    <>
      <Sections title={"about"} content={<AboutMeIntroContent />} />
    </>
  );
};

const AboutMeIntroContent = () => {
  const anchorClasses =
    "h-24 bg-slate-500 flex items-center justify-center rounded-lg";
  return (
    <>
      <p>
        Hi! My name is Aaron, I have a degree in physics and I apply my
        knowledge in data science and machine learning projects.
      </p>

      <p className='mt-2'>
        I specialize in 3 main areas: Game art, Data Science, and Front-end
        React development. If you need someone with one of those profiles,
        please get in touch with me and let&apos;s work together. check my
        portfolios:
      </p>
      <div className='mt-8 grid grid-cols-3 gap-4 w-full'>
        <a className={anchorClasses} href='#'>
          Fron-end React
        </a>
        <a className={anchorClasses} href='#'>
          3D Game art
        </a>
        <a className={anchorClasses} href='#'>
          Data science
        </a>
      </div>
    </>
  );
};

export default AboutPage;
