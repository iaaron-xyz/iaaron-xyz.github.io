const LinkedinIcon = ({ className, h = 48, w = 48 }) => {
  const pathStyle = {
    fill: "none",
    strokeWidth: 1.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        style={pathStyle}
        d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
      ></path>
      <rect x='2' y='9' width='4' height='12'></rect>
      <circle cx='4' cy='4' r='2'></circle>
    </svg>
  );
};

export default LinkedinIcon;
