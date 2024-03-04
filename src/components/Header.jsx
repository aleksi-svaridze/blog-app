import { useState } from 'react';
import {images} from '../constants';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdAlignHorizontalLeft, MdKeyboardArrowDown } from "react-icons/md";

const NavItemInfo = [
  {name: 'home', type: "link"},
  {name: 'articles', type: "link"},
  {name: 'pages', type: "dropdown", items: ["About us", "Contact us"]},
  {name: 'pricing', type: "link"},
  {name: 'faq', type: "link"},
]

const NavItem = ({item}) => {
  return(
    <li className='relative group'>
      { item.type === 'link' ? 
        <><a href='/' className='px-4 py-2'>{ item.name }</a>
        <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span></> 
        :
        <>
          <a href='/' className='px-4 py-2 flex gap-x-1 items-center'>
            { item.name }
            <MdKeyboardArrowDown />
          </a>
          <div className='transition-all duration-500 hidden pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max'>
            <div className='flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {item.items.map(page => (
                  <a href='/' className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>{page}</a>
              ))}
            </div>
          </div>
        </> 
      }
    </li>
  )
}

export default function Header() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible(curState => {
      return !curState;
    })
  }

  return (
    <div>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img src={images.Logo} alt="Logo" className='w-16' />
        </div>

        <div className='lg:hidden z-50'>
        {
          navIsVisible ? 
            <AiOutlineClose onClick={navVisibilityHandler} className='w-6 h-6' /> 
            : 
            <AiOutlineMenu onClick={navVisibilityHandler} className='w-6 h-6' />
          }
        </div>
          
        <div className={`${navIsVisible ? "right-0" : "-right-full"} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end lg:static fixed top-0 bottom-0 gap-x-9 items-center`}>
          <ul className='text-white lg:text-dark-soft flex items-center gap-y-5 gap-x-2 font-semibold flex-col lg:flex-row'>
            {
              NavItemInfo.map(item => (
                <NavItem item={item} key={item.name} />
              ))
            }
          </ul>
          <button className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
        </div>
      </header>
    </div>
  )
}
