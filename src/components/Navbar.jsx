const Navbar = () => {
  return (
    <div className='fixed h-full border-r border-slate-700 left-0'>
      <div className='flex h-full'>
        <ul className='[&>li]:my-4 [&>li]:px-4 flex flex-col items-center justify-center'>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Stack</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
