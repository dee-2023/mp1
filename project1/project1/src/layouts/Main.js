import { Outlet } from 'react-router-dom'

const Main = ( {componentData} ) => {



    return(

       <main>

           <Outlet />
           
       </main>
   
      )
     
   
   }
   
   export default Main;