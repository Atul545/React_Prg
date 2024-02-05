import React from 'react'
import '../App.css'
function Contactlist(props){
    const {DataToChild,remove}=props
    const contactlist = DataToChild.map((val) => {
        return(
            <div className='contacts'>
                <div>
                    {val.data.name}
                </div>
                <div className='email'>
                    {val.data.email}
                </div>
                <button onClick={()=>remove(val.id)}>
                    Delete
                </button>
            </div>
        )
    })
    
    //console.log(DataToChild)
    return(
        <>
        <div className='contactheader'>Contact List</div>
        <div>{contactlist}</div>
        </>
    )
}
export default Contactlist