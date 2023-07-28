import { Outlet } from 'react-router-dom'

const Main = ( {componentData} ) => {

    const handleNameChanges = ()=>{
        const names = ['mark', 'john', 'jeff', 'bea'];
        const num = Math.floor(Math.random() * 4);
        return names[num];
    }

    return(

       <main>

       <p>
            
            HELLO { handleNameChanges() }  <br />

           <b> {componentData} </b>

           <Outlet />
           
        </p>
       </main>
   
      )
     
   
   }
   
   export default Main;