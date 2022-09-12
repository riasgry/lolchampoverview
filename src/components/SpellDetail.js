import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHourglass, faDroplet} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function SpellDetail({spell}) {
  return (
    <div className='spell-detail'>
        <strong>{spell.name}</strong>
        <p>{spell.description}</p>
        <p><FontAwesomeIcon icon={faDroplet} /> {spell.costBurn} mana(s)</p>
        <p>
        <FontAwesomeIcon icon={faHourglass} />{spell.cooldownBurn} second(s)</p>
    </div>
  )
}

export default SpellDetail