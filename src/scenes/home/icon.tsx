import { motion } from "framer-motion";



const Icon = (props: { src: string; }) => {

  const iconStyle = "lishadow bg-white rounded-full h-[4rem] w-[4rem] flex justify-center items-center hover:shadow-none";

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0 },
      }}
      className={iconStyle}><img src={`/src/assets/${props.src}.svg`} alt="icon" className="w-[34px] h-[34px]" /> </motion.li>
  )
}

export default Icon