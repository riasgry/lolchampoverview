import React, { useEffect } from 'react'
import { useState } from 'react';
import SpellDetail from './SpellDetail';

function SelectedChamp({selectedData,select,isSelect}) {
    const [spell, setSpell] = useState(null)
    useEffect(() => {
        const timer = setTimeout(() => {
          isSelect(true)
          setSpell(null)
        }, 1500);
        return () => clearTimeout(timer);
      }, [select]);

      const spellDetail = id=>{
          
          spell!==null && id.name===spell.name?(
              setSpell(null)
          ):(
            setSpell(id)
          )
        
    }

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
                    selectedData && selectedData.spells.map((a)=><img src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/"+a.id+".png"} alt="" onClick={()=>spellDetail(a)} key={a.id} />)
                    }
                </div>
                {
                    spell!=null?(
                        <SpellDetail spell={spell} />
                    ):(console.log('data kosong'))
                }

                
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