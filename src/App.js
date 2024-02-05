 import React,{useState,useEffect} from 'react'
import Header  from './Component/Header'
import Addcontact  from './Component/Addcontact'
import Contactlist  from './Component/Contactlist'
import uuid4 from 'uuid4'
 import './App.css'
function App() {

  const localStoragekey= "contact"

  const[contact,setContact]=useState(()=>{
   return JSON.parse(localStorage.getItem(localStoragekey))
   || []
  })


useEffect(()=>{
  localStorage.setItem(localStoragekey,JSON.stringify(contact))
},[contact])

  const addcontact = (data) =>{
    setContact([...contact,{id:uuid4(),data}])
   // console.log(data)
  }
  const remove = (id) =>{
const updatelist = contact.filter((val) => {
  return val.id !== id;
})
  setContact(updatelist)
}
  return (
    <div >
      <Header/>
      <Addcontact DataFromChild={addcontact}/>
         <Contactlist DataToChild={contact} remove={remove}/>
    </div>
  );
}

export default App;
