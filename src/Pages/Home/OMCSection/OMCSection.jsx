import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
export default function OMCSection() {
    return (
        <div className='bg-white h-52 w-screen py-10 flex flex-col gap-6 items-center '>
            <h5 className='text-3xl'>Our Main Clients</h5>
            <Swiper className='w-full' modules={[Autoplay]} slidesPerView={2} breakpoints={{500:{slidesPerView:4}}}  spaceBetween={50} autoplay={{delay:2000}}>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="colorlib-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="js-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="html5-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="css-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="less-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="sass-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="bootstrap-logo.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="adobe-logo.png" alt="" /></SwiperSlide>
                <SwiperSlide className='flex justify-center'><img className='w-12 h-12 mx-auto' src="facebook-logo.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
