import Project from "./Project.tsx";
import project1img from '/src/assets/notebook.jpeg';

const Projects = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] flex justify-center items-center md:flex-col md:py-32">
        <div className="md:w-[1000px]">
            <p>PROJECTS</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            
            <div>
                <Project
                img={project1img}
                name={'CAR RENTAL 🚗'}
                description={"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."}
                code={'teste'}
                liveDemo={"teste"}
                tech1={'React'}
                tech2={'Tailwind CSS'}/>
            </div>
        </div>
    </div>
  )
}

export default Projects