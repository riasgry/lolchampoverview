import axios from "axios"
import { useState, useEffect } from "react"

function useFetch(url) {
  const [data, setData]= useState(null);
  const [loading, isLoading] = useState(false)
  const [error, isError]= useState(null);
  
  useEffect(()=>{
      isLoading(true)
      axios.get(url).then((response)=>{
          setData(response.data)
      }).catch((err)=>{
        isError(err)
      }).finally(()=>{
        isLoading(false);
      })

  }, [url]);

  return {data, loading, error};
}

export default useFetch