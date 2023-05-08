const Footer = () => {

    const year = new Date().getFullYear();
    
  return (
    <div className="flex justify-center bg-[#2d2e32] py-14 px-10 text-white">
        <div className="flex w-[1000px] gap-8 items-center flex-col md:justify-between md:flex-row">
          <h3 className="text-xl font-semibold">Copyright © {year}. All rights are reserved.</h3>

          <div className="flex gap-5 text-2xl">
            <a href="https://www.linkedin.com/in/henry-gabriel-a276301b6/" target="_blank"><i className="text-3xl hover:text-[#4080E7] duration-300 fa-brands fa-linkedin" /></a>
            <a href="https://github.com/henryornellas" target="_blank"><i className="hover:text-[#4080E7] duration-300 text-3xl fa-brands fa-github" /></a>
          </div>
        </div>
    </div>
  )
}

export default Footer