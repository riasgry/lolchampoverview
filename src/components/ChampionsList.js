import React, { useState } from 'react'
import Champion from './Champion'
import SelectedChamp from './SelectedChamp'
import useFetch from './useFetch'

function ChampionsList() {
    const [selectedData, setSelectedData]=useState('')
    const [select, isSelect]=useState(false)
    const{data}=useFetch('https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json')
    const datas = data?.data
  return (
    <>
    <SelectedChamp selectedData={selectedData} select={select} isSelect={isSelect} />
    <div className="list">
      <div className='champ-list'>
          {
            datas && Object.keys(datas)?.map((key)=><Champion key={datas[key].id}{...datas[key]} setSelectedData={setSelectedData} isSelect={isSelect}/>)
          } 
      </div>
      </div>
    </>
        
    
  )
}

export default ChampionsList