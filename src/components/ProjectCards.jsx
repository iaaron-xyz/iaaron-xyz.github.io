const CardsGroup = ({ quantity }) => {
  const projects = [
    {
      id: 0,
      title: "Card Project 1",
      image: "Card image 1",
    },
    {
      id: 1,
      title: "Card Project 2",
      image: "Card image 2",
    },
    {
      id: 2,
      title: "Card Project 3",
      image: "Card image 3",
    },
  ];

  // Create list with the required number of projects
  // const projectsToRender = [];
  // for (let i = 0; i < quantity; i += 1) {
  //   projectsToRender.push(projects[i]);
  // }

  return (
    <>
      {[...Array(quantity)].map((element, index) => {
        return (
          <ProjectCards
            key={projects[index].id}
            title={projects[index].title}
            image={projects[index].image}
          />
        );
      })}
    </>
  );
};

const ProjectCards = ({ title, image }) => {
  return (
    <div className='bg-pink-300 rounded-lg p-2 mb-4'>
      <h3 className='m-1 mb-2'>{title}</h3>
      <div className='w-full h-72 rounded-lg bg-sky-200'>{image}</div>
    </div>
  );
};

export default CardsGroup;
