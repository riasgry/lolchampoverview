import React from 'react'

function Skin({idChamp, num, name}) {
    
  return (
    <>
        <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+idChamp+"_"+num+".jpg"} alt="" />
    </>
  )
}

export default Skin