import { motion } from "framer-motion";

const Contact = () => {

    const circle = 'bg-white rounded-full lishadow  w-20 h-20 flex justify-center items-center';

    return (
        <div id="contact" className="bg-white py-16 px-10 flex justify-center md:py-28">

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, }
            }}
            className="w-[1000px] flex flex-col items-center md:items-start">
                <h4 className="text-[#4080E7] font-bold text-xl mb-5">CONTACT</h4>
                <h3 className="text-3xl font-extrabold mb-20">Don't be shy! Hit me up! 👇🏻</h3>

                <div className="flex gap-20 flex-col items-center md:flex-row md:items-start">
                    <div className="flex items-center flex-col gap-5 md:flex-row circle">
                        <a href="https://www.google.com/maps/place/Minas+Gerais/" target="_blank" className={circle}><i className="text-[2rem] text-[#4080E7] fa-solid fa-map-location-dot" /></a>
                        <div className="flex flex-col text-center md:items-start">
                            <p className="text-xl font-bold mb-2">Location</p>
                            <a href="https://www.google.com/maps/place/Minas+Gerais/" target="_blank" className="hover:text-[#4080E7]">Minas Gerais, Brazil</a>
                        </div>
                    </div>

                    <div className="flex items-center flex-col gap-5 md:flex-row circle">
                        <a href="mailto:henrygabriellemos@hotmail.com" className={circle}><i className="text-[2rem] text-[#4080E7] fa-solid fa-envelope-open-text" /></a>
                        <div className="flex flex-col text-center md:items-start">
                            <p className="text-xl font-bold mb-2">Mail</p>
                            <a href="mailto:henrygabriellemos@hotmail.com" className="hover:text-[#4080E7]">henrygabriellemos@hotmail.com</a>
                        </div>
                    </div>
                </div>

            </motion.div>

        </div>
    )
}

export default Contact