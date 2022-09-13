import React from 'react'
import { useEffect } from 'react'
import Skin from './Skin'

function SkinChamp({data, id}) {
   useEffect(()=>{
    const item = document.getElementsByClassName('skin-list')[0]
    item.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
          item.scrollLeft += 30;
          e.preventDefault()
        }
        else {
          item.scrollLeft -= 30;
          e.preventDefault()
        }
      });
    
   },[])
   
  return (
    <div className='skin-list'>
      
        {
            data?.map((a,b)=><Skin key={a.id} {...a} idChamp={id} index={b}/>)
        }
       
    </div>
  )
}

export default SkinChamp