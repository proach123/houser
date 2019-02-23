import React, { Component } from 'react';
import House from '../House/House'
import { Link } from 'react-router-dom'
import Wizard from '../Wizard/Wizard';
import axios from 'axios'

class Dashboard extends Component {

    constructor(){
        super()

        this.state={
            houseList: []
        }
    }

    componentDidMount() {
        axios.get('/api/houser').then(res => {
          this.setState({
            houseList: res.data
          });
        });
      }

    //   deleteHouse(id) {
    //     axios.delete(`/api/house/${id}`).then(res => {
    //       this.setState({
    //         houses: res.data
    //       });
    //     });
    //   }
    // This delete is not set up yet



    
    render(){
        const mappedHouses = this.state.houseList.map(house => {
            return(
            <House
            key={house.id}
             name={house.name}
             address={house.address}
             city={house.city}
             state={house.state}
             zipcode={house.zipcode}
            />)
            
        })
        return(
            <div>Dashboard
            <House/>
           <Link to='/wizard'>
           <button>Add New Property</button>
           </Link>
           {mappedHouses}
           </div>
        
        )
        
    }
}

export default Dashboard