const Sections = ({ title, content }) => {
  return (
    <section className='relative my-8'>
      <h3 className='absolute -left-24 dark:text-slate-400'>{title}</h3>
      <div className='text-left'>{content}</div>
    </section>
  );
};

export default Sections;
