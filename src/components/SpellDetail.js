import React from 'react'

function SpellDetail({spell}) {
  return (
    <div className='spell-detail'>
        <p>{spell.name}</p>
        <blockquote>"{spell.description}"</blockquote>
        <blockquote>{spell.cooldownBurn}</blockquote>
    </div>
  )
}

export default SpellDetail