import React from 'react';


function House(props){
    console.log(props)
    
    
            return(
            <div>
                <button onClick={(e)=>this.deleteHouse(e.target.value)}>Delete</button>
                {props.name}
                {props.address}
                {props.city}
                {props.state}
                {props.zipcode}
            </div>
            
        )
    
}

export default House

