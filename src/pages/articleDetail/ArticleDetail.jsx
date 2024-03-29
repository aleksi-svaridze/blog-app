import { Link } from 'react-router-dom'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareBtns from '../../components/SocialShareBtns'

export default function ArticleDetail() {
    const breadCrumbsData = [
        {name: 'Home', link: '/'},
        {name: 'Blog', link: '/blog'},
        {name: 'title', link: '/blog/1'}
    ]

    const postsdata = [
        {_id: 1, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
        {_id: 2, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
        {_id: 3, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
        {_id: 4, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
        {_id: 5, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
        {_id: 6, image: images.PostImage_1, title: 'bla bla bla', createdAt: '9/12/2024'},
    ]

    const tagsData = ['Medical', 'Lifestyle', 'Education','Health']

  return (
    <MainLayout>
        <div className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData} />
                <img src={images.PostImage_1} alt='laptop' className='rounded-xl w-full' />
                <Link 
                    to={'/blog?category=selectedCategory'} 
                    className='uppercase text-primary text-sm font-roboto inline-block mt-4 md:text-base'>{'education'}</Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>Help children get better education</h1>
                <div className='mt-4 text-dark-soft'>
                    <p className='leading-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    </p>
                    <p className='leading-7 mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    </p>
                    <p className='leading-7 mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    </p>
                </div>
                <CommentsContainer className={'mt-10'} loggedInUserId='a' />
            </article>
            <div>
                <SuggestedPosts 
                    header={'Latest Article'} 
                    posts={postsdata} 
                    tags={tagsData} 
                    className={'mt-8 lg:mt-0 lg:max-w-sm'}
                />
                <div className='mt-7'>
                    <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>Share on:</h2>
                    <SocialShareBtns 
                        url={encodeURI('https://moonfo.com/post/client-side-and-server-side-explanation')} 
                        title={encodeURIComponent('Client-side and Server-side explanation')} 
                    />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}
