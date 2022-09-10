import React, { useEffect } from 'react'

function SelectedChamp({selectedData,select,isSelect}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          isSelect(true)
        }, 1000);
        return () => clearTimeout(timer);
      }, [select]);
    
  return (
    <>
    {
        select&&selectedData?(
            <div className='champ-detail'>
       
        <img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+selectedData.id+'_0.jpg'} alt="" />
        <h3>{selectedData.name}</h3>
        <p>{selectedData.title}</p>

        <div className="spell-list">
            {
                selectedData && selectedData.spells.map((a)=><img src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/"+a.id+".png"} alt="" key={a.id} />)
            }
        </div>
    </div>
        ):(
            <h1>Loading</h1>
        )
    }
    
    </>
    
  )
}

export default SelectedChamp