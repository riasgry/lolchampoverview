import React, { useEffect } from 'react'

function SelectedChamp({selectedData,select,isSelect}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          isSelect(true)
        }, 1500);
        return () => clearTimeout(timer);
      }, [select]);
    
  return (
    <>
    {
        select&&selectedData?(
            <div className='champ-detail'>
       
        <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+selectedData.id+'_0.jpg'} alt="" />
        <h3>{selectedData.name} <br /> <span>{selectedData.title}</span> </h3>
        

        <div className="spell-list">
            <div className='pasif'>
            <img src={"https://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/"+selectedData.passive.image.full} alt="" />
            <p><strong>Passive</strong></p>
            </div>
            
            {
                selectedData && selectedData.spells.map((a)=><img src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/"+a.id+".png"} alt="" key={a.id} />)
            }
        </div>
    </div>
        ):(
            <div className='champ-detail-loading'>
            <h1>Loading</h1>
            </div>
        )
    }
    
    </>
    
  )
}

export default SelectedChamp