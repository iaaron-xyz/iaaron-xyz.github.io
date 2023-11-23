const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <div className='mt-24 mb-16'>{currentYear} | @iaaron-xyz</div>;
};

export default Footer;
