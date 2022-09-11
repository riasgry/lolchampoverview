import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDroplet, faShieldHalved, faPersonRunning, faShieldHeart} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function StatValue({statChamp}) {
    
  return (
    <div className='stats'>
        <p><FontAwesomeIcon icon={faHeart} /> {statChamp.hp}</p>
        <p><FontAwesomeIcon icon={faDroplet} /> {statChamp.mp}</p>
        <p><FontAwesomeIcon icon={faPersonRunning} /> {statChamp.movespeed}</p>
        <p><FontAwesomeIcon icon={faShieldHalved} /> {statChamp.armor}</p>
        <p><FontAwesomeIcon icon={faShieldHeart} /> {statChamp.spellblock}</p>
    </div>
  )
}

export default StatValue