import React, { Component } from 'react';

import './player.css';


class Player extends Component{

    handleForm(e){

        e.preventDefault();

        this.props.player(e.target.player.value);
    }

    render(){

        return(

            <form className="forms" onSubmit={(e)=>this.handleForm(e)}>
                <div className="form-data bigger">Choose Player</div>
                <div className="form-data">
                    <label for="playerX">Player X</label>
                    <input type="radio" id="playerX" name="player" value="X"/>
                </div>
                <div className="form-data">
                    <label for="playerO">Player O</label>
                    <input type="radio" id="player0" name="player" value="O"/>
                </div>
                <div className="form-data ">
                    <input className="submit-button" type="submit" value="Start"/>
                </div>
                
            </form>
        )
    }
}

export default Player;