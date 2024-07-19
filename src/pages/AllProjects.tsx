function AllProjects() {
  const projects = [
    { name: "Project 1", description: "Description 1", link: "#", numberSrc: "/img/numbers/1.svg" },
    { name: "Project 2", description: "Description 2", link: "#", numberSrc: "/img/numbers/2.svg" },
    { name: "Project 3", description: "Description 3", link: "#", numberSrc: "/img/numbers/3.svg" },
    { name: "Project 4", description: "Description 4", link: "#", numberSrc: "/img/numbers/4.svg" },
    { name: "Project 5", description: "Description 5", link: "#", numberSrc: "/img/numbers/5.svg" },
    { name: "Project 6", description: "Description 6", link: "#", numberSrc: "/img/numbers/6.svg" },
  ];

  return (
    <main className="bg-ozp-background min-h-screen min-w-screen max-w-screen flex flex-col">
      <div className="h-32  flex flex-col justify-end items-start p-4">
        <h1 className="text-2xl font-bold text-center text-white">//PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4 flex-grow ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-green-500 aspect-w-1 aspect-h-1 p-4 rounded flex flex-col justify-between items-center space-y-2 flex-grow h-32"
          >
            <img className="text-white font-bold " src={project.numberSrc} />
            <h2 className="text-white font-bold">{project.name}</h2>
            <p className="text-white">{project.description}</p>
            <a href={project.link} className="text-blue-300 underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AllProjects;
