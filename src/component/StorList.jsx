import React from 'react'
import {useSelector} from 'react-redux'
import Storeitem from './Storeitem';


const StorList = () => {
  const stors= useSelector((state)=> state.stor.storelist);
  console.log(stors)
  return (
    <div style={{ height:"650px", width:"100%", marginTop:"10%", display:'flex', flexFlow:"wrap", justifyContent:"space-around", marginTop:"20%"}}>
      {stors.map((el)=><Storeitem stor={el}/>)}
    </div>
  )
}

export default StorList
 