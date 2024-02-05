import React,{useState} from 'react'
import '../App.css'
function Addcontact({DataFromChild}){
    const[contactData,setcontactData] = useState({name:"",email:""});
    const handleChange=(e)=>{
if(e.target.name ==="name"){
    setcontactData({...contactData,name: e.target.value}) 
}
else{
    setcontactData({...contactData,email: e.target.value})
}
    }
    const handleAdd = () =>{
        if(contactData.name ==="" || contactData.email ===""){
            alert("Please Fill all Details")
            return
        }
        DataFromChild(contactData)
        setcontactData({name:"",email:""})
    }
    return (
        <div className='formHeader'>
            <div className='addContact'> Add Contact</div>
            <form>
<label>Name:</label> 
<input type='text' name="name" placeholder='Enter Name'  value={contactData.name} onChange={handleChange}/><br/>
<label>Email:</label> 
<input type='email' name="email" placeholder='Enter Email' value={contactData.email} onChange={handleChange}/>
            </form>
            <button className='btn' onClick={handleAdd}>Add Contact</button>
        </div>
    )
}
export default Addcontact;