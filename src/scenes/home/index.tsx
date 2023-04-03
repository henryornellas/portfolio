import mephoto from "../../assets/mephoto.jpg"

const Home = () => {
  return (
    <div id="home" className="w-full flex justify-center items-center bg-[#f9f9f9] pt-36 md:pt-64">

      <div className="w-[70%] md:w-[1000px] px-10">

        <div className="flex flex-col items-center text-center mb-20 gap-7 md:gap-[5rem] md:mb-32 md:flex-row md:items-stretch md:text-left">

          <div className="w-5/6 flex justify-between flex-col gap-6 md:gap-4">
            <h1 className="font-black text-6xl leading-tight">Full-Stack React Developer 👋🏻</h1>
            <p className="text-[#767676] text-lg">Hi, I'm Henry Gabriel. A passionate Full-stack React/Node Developer living in Minas Gerais, Brasil. 📍</p>

            <span className="flex justify-center md:justify-normal gap-4 text-[2rem]">
              <a href=""> <i className="fa-brands fa-linkedin"></i> </a>
              <a href=""> <i className="fa-brands fa-github"></i> </a>
            </span>

          </div>

          <img src={mephoto} alt="photo" className="rounded-full h-[322px] w-[322px] order-first md:order-last" />

        </div>

        <div className="flex flex-col items-center text-center md:flex-row md:text-left">
          <p className="pb-3 border-b-2 border-black md:border-r-2 md:border-b-0 md:pr-5 md:p-0">Tech Stack</p>

          <div></div>
        </div>

      </div>
    </div>
  )
}

export default Home