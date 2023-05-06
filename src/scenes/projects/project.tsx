type Props = {
    img: string,
    name: string,
    description: string,
    code: string,
    liveDemo: string,
    tech1: string,
    tech2: string,
}

const Project = (props: Props) => {
    return (
        <div className="bg-white flex lishadow rounded-2xl md:h-[25rem] md:p-6">
            {/* IMAGE SIDE */}
            <div className="rounded-2xl overflow-hidden md:w-[55%] lishadow">
                <a href={props.liveDemo}><img src={props.img} alt="demo" /></a>
            </div>

            {/* TEXT SIDE */}
            <div className="flex justify-center w-[45%]">
                <div className="flex justify-between items-center text-center flex-col w-[80%]">
                    <h3 className="font-bold">{props.name}</h3>
                    <p className="font-medium text-lg text-[#767676]">{props.description}</p>

                    <div className="flex gap-5">
                        <p className="p-3 font-semibold lishadow">{props.tech1}</p>
                        <p className="p-3 font-semibold lishadow">{props.tech2}</p>
                    </div>

                    <div className="flex">
                        <a href={props.code}>Code <i className="btn fa-brands fa-github"></i></a>
                        <a href={props.liveDemo}>Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project