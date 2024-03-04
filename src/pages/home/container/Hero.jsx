import {images} from '../../../constants'

export default function Hero() {
  return (
    <div className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>

      <div className='mt-10 lg:w-1/2'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-4 lg:text-left lg:max-w-[340px]'>Read the most intresting articles</h1>
        <p className='text-dark-light lg:text-base xl:text-xl mt-4 text-center md:text-xl lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam tenetur aliquid.</p>
        <div className='flex flex-col gap-y-2.5 mt-10 relative lg:mt-6 xl:mt-10'>
            <div className='relative'>
                <img src={images.SearchIcon} alt='search' className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6' />
                <input type='text' className='placeholder:font-bold placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none font-semibold text-dark-soft shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' placeholder='Search Article' />
            </div>
            <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
        </div>
        <div className='flex flex-col lg:flex-row lg:flex-nowrap lg:items-start lg:gap-x-4 lg:mt-7 mt-4'>
            <span className='text-dark-light font-semibold italic lg:mt-4 mt-2 lg:text-sm xl:text-base'>Popular Taggs:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experience</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interface</li>
            </ul>
        </div>
      </div>

      <div className='hidden lg:block lg:1/2'>
        <img src={images.HeroImage} className="w-full" alt="read the article" />
      </div>

    </div>
  )
}
