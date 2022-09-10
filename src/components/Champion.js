import React from 'react'
import useFetch from './useFetch'

function Champion({id,name,title,blurb,setSelectedData,isSelect}) {
  const {data}=useFetch('http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/'+id+'.json')
  const DetailsChamp = ()=>{
    setSelectedData(data?.data[id])
    isSelect(false)
  }
  
  return (
    <>
      <div className='champ'>
        <img src={'http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/'+id+'.png'} alt="" onClick={()=>DetailsChamp()} />
        <p className='champ-name'>{name}</p>
        </div>
    </>
    
  )
}

export default Champion