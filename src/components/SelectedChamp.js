import React, { useEffect } from 'react'
import { useState } from 'react';
import SkinChamp from './SkinChamp';
import SpellDetail from './SpellDetail';
import StatValue from './StatValue';

function SelectedChamp({selectedData,select,isSelect}) {
    const [spell, setSpell] = useState(null)
    const [keys, setKeys] = useState(null)
    useEffect(() => {
        const timer = setTimeout(() => {
          isSelect(true)
          setSpell(null)
        }, 1500);
        return () => clearTimeout(timer);
      }, [select]);

      const spellDetail = (id, key)=>{
        setKeys(key)
          let element =document.getElementsByClassName('spell-list')[0]
          element && Object.keys(element.children).map(e => 
              element.children[e].classList.remove("active"))
          spell!==null && id.name===spell.name?(
            element.children[key].classList.remove('active')
          ):(
            element.children[key].classList.add('active')
          )
         
        
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
          <>
            <div className='champ-detail'>
                <img src={'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+selectedData.id+'_0.jpg'} alt="" />
                <h3>{selectedData.name} <br /> <span>{selectedData.title}</span> </h3>
                <div className="spell-list">
                    {/* <div className='pasif active'>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/"+selectedData.passive.image.full} alt="" />
                    <p><strong>Passive</strong></p>
                    </div> */}
                    {
                    selectedData && selectedData.spells.map((a, b)=><img src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/"+a.id+".png"} alt="" onClick={()=>spellDetail(a, b)} key={a.id} />)
                    }
                </div>
                <StatValue statChamp={selectedData.stats} />
                {
                    spell!=null?
                        <SpellDetail spell={spell} idChamp={selectedData.key} keys={keys} />:''
                    
                }


                
            </div>
            <SkinChamp data={selectedData.skins} id={selectedData.id}/>
          </>
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