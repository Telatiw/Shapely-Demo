import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home'
let Router = [
    {path:'/',element: <Layout /> , children:[
        {index:true, element: <Home/> },
    ] }
]
export default Router