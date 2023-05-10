import notebook from "/src/assets/notebook.jpeg";
import computerguy from "/src/assets/computerGuy.png";
import { motion } from "framer-motion";
import rotate from '/src/assets/circleText.svg';

const About = () => {
    return (
        <div id="about" className="flex justify-center text-center p-10 md:py-44">

            <div className="flex items-center flex-col gap-8 md:w-[1000px] md:flex-row md:gap-20 md:items-stretch">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, }
                    }}
                    className="box md:w-[50%] relative justify-center flex w-[25rem]">
                    <img className="rounded-2xl h-full" src={notebook} alt="notebook" />
                    <img className="pcguy absolute bottom-0 right-0 w-16 z-10" src={computerguy} alt="" />

                    <span className="spin absolute bottom-[-62px] right-[-57px] bg-white rounded-full p-2">
                        <img className="circle w-[10rem]" src={rotate} alt="circle" />
                    </span>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .8 }}
                    variants={{
                        hidden: { opacity: 0, x: +50 },
                        visible: { opacity: 1, x: 0, }
                    }}
                    className="flex flex-col justify-between md:w-[50%]  md:text-left gap-5">
                    <h4 className="text-[#4080E7] font-bold text-xl">ABOUT ME</h4>
                    <h3 className="text-3xl font-extrabold">A dedicated Full-stack Developer based in Brazil. 📍</h3>
                    <p>
                        As a Junior Full-stack Developer, I possess skills in HTML, CSS, JavaScript, React, Tailwind, Node and MongoDB.
                        I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic,
                        engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                        I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                </motion.div>

            </div>
        </div>
    )
}

export default About