import {   useState, useEffect} from "react";

const useFetch =(url)=>{
    const [data,setdata] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const abordCont = new AbortController();
        fetch(url,{signal:abordCont.signal})
            .then(response=>{
                if(!response.ok){
                    throw Error('Could not fetch the data');
                }
                return response.json();
            })
            .then((data)=>{
                setdata(data);
                setLoading(false);
                setError(null);
            })
            .catch((error)=>{
                if(error.name ==="AbortError"){
                }else {
                    setError(error.message);
                    setLoading(false);
                }
            })
        return ()=>abordCont.abort();
    },[url]);
    return {data ,loading,error}
}
export default useFetch;
