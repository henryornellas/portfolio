import { motion } from "framer-motion";

type Props = {
    src: string,
    name: string,
    description: string,
    code: string,
    liveDemo: string,
    tech1: string,
    tech2: string,
    order: string
}

const Project = (props: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .8 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, }
            }}
            className="bg-white flex lishadow justify-between w-fit flex-col gap-5 h-[50rem] rounded-2xl md:h-[25rem] p-6 md:flex-row md:w-[1000px]">

            {/* IMAGE SIDE */}
            <div className={`rounded-2xl overflow-hidden w-[35rem] md:w-[55%] bg-cover h-full bg-no-repeat lishadow proj md:order-${props.order}`}
                style={{ backgroundImage: `url(/src/assets/${props.src}.png)` }}>

                <a href={props.liveDemo} className="h-full w-full flex" target="_blank" />

            </div>

            {/* TEXT SIDE */}
            <div className="flex justify-center w-[35rem] md:w-[45%] proj md:py-5">
                <div className="flex justify-between items-center text-center gap-8 flex-col w-[80%]">
                    <h3 className="font-bold">{props.name}</h3>
                    <p className="font-medium text-lg text-[#767676]">{props.description}</p>

                    <div className="flex gap-5">
                        <p className="p-3 font-semibold lishadow">{props.tech1}</p>
                        <p className="p-3 font-semibold lishadow">{props.tech2}</p>
                    </div>

                    <div className="flex text-lg font-medium gap-10">
                        <a href={props.code} target="_blank" className="btn flex items-center gap-2">Code<i className="fa-brands fa-github text-[1.6rem]"></i></a>
                        <a href={props.liveDemo} target="_blank" className="btn flex items-center gap-2">Live Demo<i className="fa-solid fa-arrow-up-right-from-square text-[1.6rem]"></i></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project