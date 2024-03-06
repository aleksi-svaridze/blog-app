import {images} from '../constants';
import { FaTelegram,  FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter,FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-dark-hard'>
        <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
          <div className='col-span-5 md:col-span-4 lg:col-span-2'>
            <h3 className='text-dark-light font-bold md:text-lg'>Products</h3>
            <ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
              <li>
                <a href="/">Landing page</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5 md:col-span-4 lg:col-span-2'>
            <h3 className='text-dark-light font-bold md:text-lg'>Services</h3>
            <ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
              <li>
                <a href="/">Landing page</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
            <h3 className='text-dark-light font-bold md:text-lg'>Company</h3>
            <ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
              <li>
                <a href="/">Landing page</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className='col-span-5 md:col-span-4 lg:col-span-2'>
            <h3 className='text-dark-light font-bold md:text-lg'>More</h3>
            <ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
              <li>
                <a href="/">Landing page</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
            <img src={images.Logo} alt="" className='brightness-0 invert mx-auto md:mx-0' />
            <p className='text-sm text-dark-light text-center mt-4 md:text-left md:text-base'>Build a modern and creative website with crealand</p>
            <ul className='flex items-center mt-5 space-x-4 justify-center text-gray-300 md:justify-start'>
              <li>
                <a href="/">
                  <FaTwitter className='w-6 h-auto' />
                </a>
              </li>
              <li>
                <a href="/">
                <FaFacebook className='w-6 h-auto' />
                </a>
              </li>
              <li>
                <a href="/">
                < FaYoutube className='w-6 h-auto' />
                </a>
              </li>
              <li>
                <a href="/">
                <FaInstagramSquare className='w-6 h-auto' />
                </a>
              </li>
              <li>
                <a href="/">
                <FaTelegram className='w-6 h-auto' />
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex flex-col items-center spase-4 md:col-span-12 space-y-4 lg:col-span-10'>
            <div className='rounded-full bg-primary text-white p-3'>
              <FaHeart className='w-7 h-auto' />
            </div>
            <p className='font-bold italic text-dark-light'>Copyright &copy; 2024. Crafted with love.</p>
          </div>
        </footer>
    </div>
  )
}
