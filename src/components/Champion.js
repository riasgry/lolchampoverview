import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import useFetch from './useFetch'

function Champion({id,name,selectedData,setSelectedData,isSelect}) {

  const {data}=useFetch('https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/'+id+'.json')
  useEffect(()=>{
    
    if (selectedData==='') {
      axios.get('https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/Aatrox.json')
      .then((response)=>{
        setSelectedData(response.data?.data['Aatrox'])
        isSelect(true)
      })
      
      
    }
  },[])
  
  const DetailsChamp = ()=>{
    setSelectedData(data?.data[id])
    isSelect(false)
  }
  
  return (
    <>
      <div className='champ' key={id}>
        <img src={'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/'+id+'.png'} alt="" onClick={()=>DetailsChamp()} />
        <p className='champ-name'>{name}</p>
        </div>
    </>
    
  )
}

export default Champion