import { motion } from "framer-motion";
import mephoto from "../../assets/mephoto.jpg";
import Icon from "./icon";
import { icons } from "./icons";

const Home = () => {

  const items = [{ src: "html" }, { src: "css" }, { src: "javascript" }, { src: "typescript" }, { src: "react" }, { src: "tailwindcss" }, { src: "node" }, { src: "mongodb" }];
  return (
    <div id="home" className="flex relative justify-center bg-[#f9f9f9] pt-32 pb-20 px-5 md:pt-56 md:h-screen">

      <div className="md:w-[1000px]">

        {/* INTRODUCTION SIDE */}
        <div className="flex flex-col items-center text-center mb-20 gap-7 md:gap-[5rem] md:mb-32 md:flex-row md:items-stretch md:text-left">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, }
            }}
            className="md:w-5/6 flex justify-between flex-col gap-6 md:gap-4">
            <h1 className="font-black text-4xl md:text-6xl leading-tight">Full-Stack React Developer 👋🏻</h1>
            <p className="text-[#767676] text-lg">Hi, I'm Henry Gabriel. A passionate Full-stack React/Node Developer living in Brazil. 📍</p>

            <span className="flex justify-center md:justify-normal gap-4 text-[2rem]">
              <a href="https://www.linkedin.com/in/henry-gabriel-a276301b6/" target="_blank"> <i className="btn fa-brands fa-linkedin"></i> </a>
              <a href="https://github.com/henryornellas" target="_blank"> <i className="btn fa-brands fa-github"></i> </a>
            </span>

          </motion.div>

          {/* MAIN PICTURE */}
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .8 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, }
            }}
            src={mephoto} alt="photo" className="rounded-full w-[322px] order-first md:order-last border-4 border-black" />



        </div>

        {/* TECH STACK ICONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: .8 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="flex flex-col items-center text-center md:flex-row md:text-left">
          <p className="pb-3 mb-10 border-b-2 border-black md:border-r-2 md:border-b-0 md:pr-5 md:p-0 md:mr-10 md:mb-0">Tech Stack</p>

          <div>
            <ul className="flex flex-wrap justify-center gap-6">
              {/* ICONS */}
              {icons.map((item) => (
                <Icon src={item.src} key={item.src} />
              ))}

            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Home