import { all } from "./all.js";
import Project from "./project.tsx";


const Projects = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] flex justify-center px-10 items-center md:flex-col py-32">
      <div
        className="w-full md:w-[1000px]">
        <p className="font-bold text-xl mb-5 text-[#4080E7]">PROJECTS</p>
        <h3 className="font-bold text-3xl mb-16">Each project is a unique piece of development 🧩</h3>

        <div className="flex items-center flex-col gap-16">

          {all.map(item => (
            <Project
              key={item.src}
              src={item.src}
              name={item.name}
              description={item.description}
              code={item.code}
              liveDemo={item.liveDemo}
              tech1={item.tech1}
              tech2={item.tech2}
              order={item.order}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects