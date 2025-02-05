import React from 'react'
import whiteCar from '../assets/white-car.png'
import car2 from '../assets/car5.png'
import car3 from '../assets/car6.png'
const whiteCarData = [
    {
        id:1,
        name:'BMW UX',
        price:100,
        image:whiteCar,
        aosDelay:'0'
    },
    {
        id:2,
        name:'KIA UX',
        price:140,
        image:car2,
        aosDelay:'500'
    },
    {
        id:3,
        name:'BMW UX',
        price:100,
        image:car3,
        aosDelay:'1000'
    },
]
const CartList = () => {
  return (
    <div className='  pt-12 pb-24 dark:bg-gray-900 dark:text-white' id='car'>
        <div className=' container'>
            {/* heading  */}
           <div>
           <h1
            data-aos='fade-up'
            className=' text-3xl sm:text-4xl font-semibold font-serif
             mb-3'
            >Lorem, ipsum dolor.</h1>
            <p
            data-aos='fade-up'
            className=' text-sm pb-10'
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit in saepe.</p>

           </div>
           {/* Car Listing cards  */}
           <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-3 gap-16'>
               {
                whiteCarData.map((item)=>(
                    <div key={item.id}
                      data-aos='fade-up'
                      data-aos-delay={item.aosDelay}
                    className=' space-y-3 border-2 border-gray-300
                     hover:border-primary  p-3 rounded-xl relative
                      group'
                    >
                        <div className=' w-full h-[120px]'>
                            <img src={item.image} alt="" 
                            className=' w-full h-[120px] object-contain
                             sm:translate-x-8 group-hover:translate-x-16
                              duration-700'
                            />
                        </div>
                        <div className=' space-y-2'>
                            <h1 className=' text-primary font-semibold'>{item.name}</h1>
                            <div className=' flex justify-between
                             items-center text-xl font-semibold'>
                                <p>${item.price}/Day</p>
                                 <a href="#">Details</a>
                            </div>
                        </div>
                        <p className=' text-xl font-semibold absolute
                         top-0 left-2'>13Km</p>
                    </div>
                ))
               }

            </div>
            <div className=' grid place-content-center mt-8'>
            <button
            data-aos='fade-up'
             className='button-outline'>Get Started</button>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default CartList
