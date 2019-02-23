import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class Wizard extends Component {

    // Set up initial state in Wizard for name, address, city, state, and zipcode.
    constructor(props){
        super(props)
 // Set up initial state in Wizard for name, address, city, state, and zipcode.
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    // Set up the input boxes to update the correct piece of state on change.

    handleName(val){
        this.setState({
            name:val
        })
    }
    handleAddress(val){
        this.setState({
            address:val
        })
    }
    handleCity(val){
        this.setState({
            city:val
        })
    }
    handleState(val){
        this.setState({
            state:val
        })
    }
    handleZip(val){
        this.setState({
            zipcode:val
        })
    }
    
createHouse(){
    const { name } = this.state;
    const { address } = this.state;
    const { city } = this.state;
    const { state } = this.state;
    const { zipcode } = this.state;
    axios.post('/api/houser',{name:name,address:address,city:city,state:state,zipcode:zipcode}).then(
        res=>{
            this.setState({
                name:res.data,
                address:res.data,
                city:res.data,
                state:res.data,
                zipcode:res.data
            })
        }
    )
}


    render(){
        return(

             // Create a corresponding input box in the JSX for each property in state.
            <div>
                <input
          type="name"
          placeholder="Enter Name"
          onChange={e => this.handleName(e.target.value)}
          value={this.state.name}
        />     

         <input
          type="address"
          placeholder="Enter Address"
          onChange={e => this.handleAddress(e.target.value)}
          value={this.state.address}
        />
        <input
          type="city"
          placeholder="Enter City"
          onChange={e => this.handleCity(e.target.value)}
          value={this.state.city}
        />
        <input
          type="state"
          placeholder="Enter State"
          onChange={e => this.handleState(e.target.value)}
          value={this.state.state}
        />
        <input
          type="zipcode"
          placeholder="Enter Zipcode"
          onChange={e => this.handleZip(e.target.value)}
          value={this.state.zipcode}
        />
        <Link to='/'>
        <button onClick={()=>this.createHouse()}>Complete</button>
        </Link>

            <Link to='/'>  
           <button>Cancel</button>
           </Link> 
           </div>  //link to Dashboard
        )
    }
}

export default Wizard
