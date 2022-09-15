import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHourglass, faDroplet} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function SpellDetail({spell,idChamp,keys}) {
  if (keys===0) {
    keys='Q'
  }else if (keys===1) {
    keys='W'
  }else if (keys===2) {
    keys='E'
  }else{
    keys='R'
  }
  
  const ChampNumber = idChamp;
  const defaultFill = "0000"

  const formattedNumber = (defaultFill + ChampNumber).substr(String(ChampNumber).length)
  return (
    <div className='spell-detail'>
      <video src={'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/'+formattedNumber+'/ability_'+formattedNumber+'_'+keys+'1.mp4'} autoPlay loop></video><br />
      <strong>{spell.name}</strong>
      <p><FontAwesomeIcon icon={faDroplet} /> {spell.costBurn} mana(s)</p>
        <p>
        <FontAwesomeIcon icon={faHourglass} />{spell.cooldownBurn} second(s)</p>
     
        
        <p>description: <br /> {spell.description}</p>
       
    </div>
  )
}

export default SpellDetail