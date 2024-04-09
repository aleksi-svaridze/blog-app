import { useState } from 'react';
import {images} from '../constants';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../store/actons/user';
import {useNavigate} from 'react-router-dom';

const NavItemInfo = [
  {name: 'home', type: "link"},
  {name: 'articles', type: "link"},
  {name: 'pages', type: "dropdown", items: ["About us", "Contact us"]},
  {name: 'pricing', type: "link"},
  {name: 'faq', type: "link"},
]

const NavItem = ({item}) => {

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandle = () => {
    setDropdown(curentState => {
      return !curentState;
    })
  }

  return(
    <li className='relative group'>
      { item.type === 'link' ? 
        <>
          <a href='/' className='px-4 py-2'>{ item.name }</a>
          <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
        </> 
        :
        <div className='flex flex-col items-center'>
          <button className='px-4 py-2 flex gap-x-1 items-center' onClick={toggleDropdownHandle}>
            { item.name }
            <MdKeyboardArrowDown />
          </button>
          <div className={`${dropdown ? 'block' : 'hidden'} transition-all duration-500 lg:hidden pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <div className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {item.items.map((page, index) => (
                  <a href='/' key={index} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft lg:bg-white'>{page}</a>
              ))}
            </div>
          </div>
        </div> 
      }
    </li>
  )
}

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector(state => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible(curState => {
      return !curState;
    })
  }
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className='sticky top-0 left-0 right-0 z-50 bg-white'>
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
          {
            userState.userInfo ? 
            <div className='text-white lg:text-dark-soft flex items-center gap-y-5 gap-x-2 font-semibold flex-col lg:flex-row'>
              <div className='relative group'>
                <div className='flex flex-col items-center'>
                  <button className='flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300' onClick={() => setProfileDropdown(!profileDropdown)}>
                    <span>Profile</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div className={`${profileDropdown ? 'block' : 'hidden'} transition-all duration-500 lg:hidden pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                    <div className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                        <button
                          type='button'
                          className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft lg:bg-white'
                        >
                            Dashboard
                        </button>
                        <button 
                          onClick={logoutHandler}
                          type='button'
                          className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft lg:bg-white'
                        >
                            Logout
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            :
            <button 
              onClick={() => navigate('/login')}
              className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'
            >
              Sign in
            </button>
          }
        </div>
      </header>
    </div>
  )
}
