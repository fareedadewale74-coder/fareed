import axios from "axios";
import { useEffect, useState } from "react";

// Custom Hooks
// function useFetch(url){
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             setData(data);
//             setLoading(false);
//         });
//      }, [url])
//      return {data, loading};
// }


// Axios method
function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState(false);

    useEffect(() => {
        const getTitle = async () => {
        try{
            const res = await axios.get(url);
            console.log(res);
            setData(res.data);
            setLoading(false);
            setError(false)
        }
        catch (err){
            setLoading(false);
            setError(err.message);
        }
        };
        getTitle();
    }, [url]);

    return {data, loading, error};
}
export default useFetch