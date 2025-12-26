import { useState,Profiler } from "react"

export default function NavBar() {
    const [openMenu,setOpenMenu] = useState(false)
    const navUpdate = (id,phase,actuaDuration,baseDuration,startTime,commitTime,interAction) => {
        console.log(commitTime)
    }
    return (
        <div className="flex flex-col">
        <div className='w-screen px-5 py-4 flex items-center justify-between bg-white'>
            <div className='w-full'><span className='text-lg font-light'>Shapely Demo</span></div>
            <svg onClick={e => setOpenMenu(prev => !prev) } className="w-6 h-6 md:hidden"><use href="#bar"></use></svg>
            <div className=' hidden  w-full md:flex items-center justify-between'>
                <ul className='flex justify-between gap-5 *:cursor-pointer'>
                    <li className='' >HOME</li>
                    <li className='' >BLOG</li>
                    <li className='' >PORTFOLIO</li>
                    <li className='' >ABOUT</li>
                    <li className='relative group'>LEVEL
                        <ul className=' translate-y-10 invisible bg-white rounded-box duration-300 p-4 transition-all opacity-0 absolute group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'>
                            <li className='text-black'>1sdfdsf</li>
                            <li className='text-black'>dsfdsf2</li>
                            <li className='text-black'>dfdsf3</li>
                            <li className='text-black'>dsfdsf4</li>
                        </ul>
                    </li>
                    <li className='' >SHOP</li>
                </ul>
                <div className='group relative'>
                    <svg className='w-8 h-8 cursor-pointer'>
                        <use href='#search'>
                        </use>
                    </svg>
                    <form className='right-0 w-52 flex  opacity-0 invisible transition-all absolute group-hover:opacity-100 group-hover:visible'>
                        <input className='input outline-0' type="text" />
                        <button className='btn'>
                            <svg className='w-4 h-4 cursor-pointer'>
                                <use href='#search'>
                                </use>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className={`${openMenu ? 'flex' : 'hidden'} bg-white px-15 py-5 flex-col gap-5 md:hidden`}>
            <ul className="flex flex-col gap-4">
                <li>HOME</li>
                <li>BLOG</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>LEVEL</li>
                <li>SHOP</li>
            </ul>
            <div className="flex gap-4">
                <svg className="w-6 h-6"><use href="#search"></use></svg>
                <input className="w-full" type="text" placeholder="SITE SEARCH" />
            </div>
        </div>
        </div>
    )
}