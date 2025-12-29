import PrimeBtn from '../../../Components/Buttons/PrimeBtn'
export default function SeoSection() {
  return (
    <div className="px-5 py-10 w-screen flex flex-col bg-white md:flex-row">
        <div className="w-full flex ">
            <img className=" " src="/public/macbook-preview-flexible.png" alt="" />
        </div>
        <div className="w-full flex flex-col justify-evenly gap-5 ">
            <h5 className='text-2xl'>SEO Friendly</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus facilis inventore reiciendis magni voluptate, nobis debitis, eius itaque ab rerum deleniti quibusdam culpa vel numquam facere dignissimos! Architecto a ut ex dolorem nam error id quae accusamus iste dolores. Molestias praesentium enim in earum totam voluptas deleniti reiciendis blanditiis sequi.</p>
              <PrimeBtn text='READ MORE'/>
        </div>
    </div>
  )
}
