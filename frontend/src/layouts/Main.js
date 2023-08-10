import { Outlet } from 'react-router-dom'
import './layout.css';

const Main = ( {componentData} ) => {



    return(

       <main>

           <Outlet />
           
       </main>
   
      )
     
   
   }
   
   export default Main;