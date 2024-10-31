import React from 'react'

const TestimonialsData = [
    {
        id:1,
        name:'Dilshad',
        image:'',
        desc:'Lorem ipsun dolor5 sit amet consectetur, adipisicing elit',
        aosDelay:'0'
    },
    {
        id:2,
        name:'Satya',
        image:'',
        desc:'Lorem ipsun dolor5 sit amet consectetur, adipisicing elit',
        aosDelay:'300'
    },
    {
        id:3,
        name:'Sabir',
        image:'',
        desc:'Lorem ipsun dolor5 sit amet consectetur, adipisicing elit',
        aosDelay:'1000'
    },
]
const Testimonials = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white py-14
     sm:pb-24'>
        <div className="container">
            {/* header section  */}
            <div className=' space-y-4 pb-12'>
            <h1
            data-aos='fade-up'
             className=' text-3xl font-semibold text-center sm:text-4xl
             font-serif'>What Your Clients Say About Us</h1>
            <p
            data-aos='fade-left'
             className=' text-center sm:px-44'> consectetur adipisicing elit. Ratione dignissimos labore provident harum a!</p>
            </div>
            {/* card section  */}
            <div className=' grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 text-black
             dark:text-white'>
                {
                    TestimonialsData.map((item)=>(
                        <div key={item.id}
                        data-aos='fade-up'
                        data-aos-delay={item.aosDelay}
                        className=' card text-center group space-y-3
                         sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20
                          sm:py-12  duration-300 rounded-lg'
                        >
                            <div className=' grid place-items-center'>
                                <img
                                className=' w-20 h-20 rounded-full'
                                 src="https://picsum.photos/200" alt="" />
                            </div>
                            <div className=' text-2xl'>
                            ⭐⭐⭐⭐⭐
                            </div>
                            <h1 className=' text-2xl'>{item.name}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
