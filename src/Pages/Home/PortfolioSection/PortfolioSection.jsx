import PrimeBtn from "../../../Components/Buttons/PrimeBtn"
export default function PortfolioSection() {
    return (
        <div className="w-screen px-5 py-10 gap-6 flex flex-col bg-slate-300 md:flex-row">
            <div className="w-full gap-5 flex flex-col justify-evenly  ">
                <h4 className="text-2xl ">Portfolio Section</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum optio ipsa voluptatum? Ullam vel velit sint, commodi nihil esse numquam possimus officia quae explicabo quisquam, dolores maxime! Fugiat obcaecati fuga earum a vel laudantium debitis dicta commodi, deleniti, corporis nemo officiis dolor iure nihil sit, veniam sapiente aliquid deserunt!</p>
                <PrimeBtn text='SEE IT IN ACTION' />
            </div>
            <div className=" w-full ">
                <img src="./flexible-portfolio.png" alt="" />
            </div>
        </div>
    )
}
