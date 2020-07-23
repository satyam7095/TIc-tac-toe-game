import React, { Component } from 'react';

import Player from './player.js';
import './status.css'

class Status extends Component{

    handlePlayer(e){

        this.props.initializePlayer(e)
    }

    render(){


        if (this.props.winner) {
            return (<h2 className="winner">Winner is {this.props.winner} </h2>)
        }
        else if(this.props.draw){

            return (<h2 className="winner"> Match {this.props.draw} !</h2>)
        } else {
            return this.props.player ?
                <h2 className="winner">Next player is {this.props.player}</h2> :
                <Player player={(e) => this.handlePlayer(e)} />
        }

        // return(

        //     this.props.player ? 
        //     <div className="turn">Now it's {this.props.player} turn</div>
        //      : <Player player={(e)=>this.handlePlayer(e)} />
        // )
    }
}

export default Status;