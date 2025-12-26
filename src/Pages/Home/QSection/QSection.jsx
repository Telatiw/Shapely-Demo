import PrimeBtn from "@/Components/Buttons/PrimeBtn"

export default function QSection() {
    return (
        <div className="flex flex-col py-10 px-5 gap-5 items-center bg-slate-400">
            <h6 className="text-3xl text-center">Do you like this awesome WordPress theme?</h6>
            <PrimeBtn className='w-full' text='DOWNLOAD NOW' />
        </div>
    )
}
