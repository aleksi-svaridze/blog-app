import {images} from '../constants'

export default function ArticleCard({className}) {
  return (
    <div className={`${className} rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
      <img 
        src={images.PostImage_1} 
        alt=''
        className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'
        />

        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Future of work</h2>
            <p className='text-dark-light mt-3 text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam qui accusamus.</p>
            <div className='flex justify-between items-center mt-6 flex-nowrap'>
                <div className='flex items-center gap-x-2 md:gap-x-2.5'>
                    <img src={images.userImage_1} alt="" className='w-9 h-9 md:w-10 md:h-10' />
                    <div className='flex flex-col capitalize'>
                        <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>user name</h4>
                        <div className='flex items-center gap-x-2'>
                            <img src={images.CheckedIcon} alt="" className='w-4 h-4 rounded-full' />
                            <span className='italic text-dark-light text-xs md:text-sm'>Verified writer</span>
                        </div>
                    </div>
                </div>
                <span className='font-bold text-dark-light italic text-sm md:text-base'>2 May</span>
            </div>
        </div>
    </div>
  )
}
