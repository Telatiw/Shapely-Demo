import { useParallax, ParallaxProvider } from 'react-scroll-parallax'
import PrimeBtn from '../../../Components/Buttons/PrimeBtn'
export default function Header() {
    return (
        <ParallaxProvider>
            <HeaderContent />
        </ParallaxProvider>
    )
}

function HeaderContent() {
    const { ref } = useParallax({ speed: -50 })
    return (
        < div >
            <div ref={ref} className="h-screen bg-center absolute brightness-75 -z-10  w-screen bg-cover bg-[url('/photo-1443527216320-7e744084f5a7-1.jpg')] ">
            </div>
            <div className='z-10 w-screen pt-52 gap-5  flex flex-col my-auto h-screen'>
                <h2 className='text-3xl text-primary-content text-center '>We Change Everything WordPress</h2>
                <p className='text-base text-primary-content text-center'>This is the only WordPress theme you will ever want to use.</p>
                <div className='flex flex-col items-center justify-center gap-3 md:flex-row'>
                    <PrimeBtn text='READ MORE' />
                    <button className='w-44 py-4 text-base font-semibold text-primary-content transition-all cursor-pointer  border-2 hover:bg-white hover:text-base-content hover:border-white' type='button'>DOWNLOAD NOW</button>
                </div>
            </div>
        </ div>
    )

}
