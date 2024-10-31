import React from 'react'
import pattern from '../assets/website/pattern.jpeg'
import AppStores from '../assets/website/app_store.png'
import PlayStore from '../assets/website/play_store.png'

const BannerImg = {
    backgroundImage:`url(${pattern})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundIRepeat:'no-repeat',
    width:'100%',
    height:'100%'
}
const AppStore = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white py-12'>
      <div className=' container pb-14'>
        <div className=' text-black py-10 sm:min-h-[400px] sm:grid
         sm:place-items-center rounded-xl'
         style={BannerImg}>
          <div>
            <div className=' space-y-6 max-w-xl mx-auto'>
                <h1
                data-aos='fade-up'
                 className=' text-2xl text-center sm:text-4xl
                 font-semibold font-serif'>Get Started with our app</h1>
                <p
                data-aos='fade-up'
                 className=' text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis dolorum ad voluptate!</p>
            <div
            data-aos='zoom-in'
             className=' flex flex-wrap items-center gap-4 justify-center'>
                <a href="#">
                    <img src={AppStores} alt="" 
                    className=' max-w-[150px] sm:max-w-[120px]
                     md:max-w-[200px]'/>
                </a>
                <a href="#">
                    <img src={PlayStore} alt="" 
                    className=' max-w-[150px] sm:max-w-[120px]
                     md:max-w-[200px]'/>
                </a>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AppStore
