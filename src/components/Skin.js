import React from 'react'

function Skin({idChamp,index, num, name}) {
    const expandSkin = () =>{
      const element = document.getElementsByClassName('skin-list')[0].children[index]
      if(element.classList.contains('active')){
        element.classList.remove('active')
      }else{
        element.classList.add('active')
      }
      
    }
  return (
    <div className='skin' onClick={()=>expandSkin()}>
        <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+idChamp+"_"+num+".jpg"}  alt="" />
        
    </div>
  )
}

export default Skin