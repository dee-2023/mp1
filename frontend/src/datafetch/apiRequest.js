
const apiRequest = async (url='', optionObj=null, errMesg=null) => {


    try{
        const response = await fetch(url, optionObj);

        if(!response.ok) throw new Error('API request failed');
        
        const responseData = await response.json();
        return responseData;

       }catch(err){
        console.log('error : ' + err.stack)

       }finally{
        console.log('done on processing')
       }


}

export default apiRequest;