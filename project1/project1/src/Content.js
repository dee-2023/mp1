
const Content = () => {

    const handleNameChanges = ()=>{
        const names = ['mark', 'john', 'jeff', 'bea'];
        const num = Math.floor(Math.random() * 4);
        return names[num];
    }

    return(
   
       <main>
        <p>
            HELLO {handleNameChanges()}
        </p>
       </main>
   
      )
     
   
   }
   
   export default Content;