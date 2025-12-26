import { ParallaxProvider, useParallax } from "react-scroll-parallax"
import PrimeBtn from "../../../Components/Buttons/PrimeBtn"
export default function SParalexSection() {
    return (<ParallaxProvider>
        <PralexContent />
    </ParallaxProvider>)
}

function PralexContent() {
    const { ref } = useParallax({ speed: -30 })
    return (
        <div className="relative">
            <div>
                <div className="bg-cover bg-center bg-[url('/SParalexSection.jpg')] h-140 -z-10 w-screen absolute  " ref={ref}></div>
            </div>
            <div className=" px-5 py-10 flex flex-col items-center gap-5 justify-evenly">
                <h5 className="text-2xl text-center text-primary-content">Small Parallax Section</h5>
                <p className="text-primary-content text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore iusto quaerat facere, dignissimos debitis ducimus distinctio ratione velit. Labore illum sed pariatur voluptatibus aut? Autem quod, debitis totam, itaque et incidunt tempore vitae quae accusantium ea id voluptatum! Repellendus cupiditate provident error alias debitis tenetur et mollitia repudiandae recusandae.</p>
                <PrimeBtn text='MORE INFO' />
            </div>
        </div>
    )
}
