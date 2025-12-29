import { ParallaxProvider, useParallax } from "react-scroll-parallax"
export default function WOCSSection() {
    return (<ParallaxProvider>
            <SContent />
        </ParallaxProvider>
    )
}
function SContent() {
    const { ref } = useParallax({ speed: -40 })
    return (
        <div className="relative">
            <div>
                <div className="w-screen absolute bg-cover bg-[url('/WOCS.jpg')] h-150 -z-10 bg-center" ref={ref} ></div>
            </div>
            <div className="px-5 text-primary-content py-10 flex flex-col gap-5 items-center md:px-52">
                <h5 className="text-primary-content text-3xl">What Our Customers Say</h5>
                <p className="text-center">Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.</p>
                <div className=" flex flex-col gap-5 items-center">
                    <img className="rounded-full w-44 h-44 object-cover" src="/rot.jpg" alt="" />
                    <span className="text-primary-content text-2xl">MOHAMMAD JAVAD</span>
                </div>
            </div>
        </div>
    )
}