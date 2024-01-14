const Sections = ({ title, content }) => {
  return (
    <section className='relative my-8'>
      <div className='absolute -left-44 w-36'>
        <h3 className='dark:text-slate-400 text-right'>{title}</h3>
      </div>
      <div className='text-left'>{content}</div>
    </section>
  );
};

export default Sections;
