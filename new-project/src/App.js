import React, { Component } from 'react';

import './App.css';
// import Player from './components/player.js';
import Status from './components/status.js';

class App extends Component{

  constructor(props){ 
    super(props)
    this.state = {

      board :Array(9).fill(null),
      player:null,
      winnerPlayer:null,
      draw:null
    }
  }

  winner(){

    var combination=[

      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"]
    ];
    for(var i=0; i< combination.length; i++){
      var [a,b,c] = combination[i];
      if(this.state.board[a]!==null &&(this.state.board[a]===this.state.board[b]&& this.state.board[a]===this.state.board[c])){

        var addStyle1 = document.getElementById(a);
        addStyle1.classList.add("mystyle");
        var addStyle2 = document.getElementById(b);
        addStyle2.classList.add("mystyle");
        var addStyle3 = document.getElementById(c);
        addStyle3.classList.add("mystyle");   
        //alert('You Won');
        this.setState({
          winnerPlayer:this.state.player
        })
      }
    }
  }
  handleClick(index){

    var flag=1;
    if(this.state.player && !this.state.winnerPlayer){

      if(this.state.board[index]===null){

        var newBoard = this.state.board
        var newPlayer = this.state.player==='X'? 'O':'X'
        newBoard[index] = this.state.player;
  
          this.setState({
            board:newBoard,
            player:newPlayer
        })
        this.winner();
        for(var i=0;i<9;i++){

          if(this.state.board[i]===null){
            flag=0;
          }
        }
        //console.log(flag);
        if(flag===1){
  
          this.setState({
            draw: 'drawn'
          })
        }
        //console.log(this.state.draw);
      }
      

    }

    // console.log(index);
    
  }

  initializePlayer(player){

    console.log(player);
    this.setState({

      player: player
    })
  }

  renderBoxes(){

    return(

      this.state.board.map(
        (box,index) => <div className="boxes" key={index} id={index}
         onClick={()=>this.handleClick(index)} >{box}
        </div>)

    )
    
  }
  reset(){

    this.setState({
      player:null,
      winnerPlayer:null,
      board :Array(9).fill(null),
      draw: null
    })
    for(var i=0;i<9;i++){

      var rem = document.getElementById(i);
        rem.classList.remove("mystyle");
    }
  }
  
  render(){

    
    // const PLAYER = this.state.player ? <div className="turn">Now it's {this.state.player} turn</div> : <Player player={(e)=>this.initializePlayer(e)} />
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="title">Tic Tac Toe Game</h1>
            <Status player={this.state.player}  
                    initializePlayer={(e)=> this.initializePlayer(e)}
                    winner={this.state.winnerPlayer}
                    draw = {this.state.draw}  />
            <div className="play-area">
              {this.renderBoxes()}
            </div>
            <div className="reset">
            <button className="reset-button" disabled={ !this.state.draw && !this.state.winnerPlayer} onClick={() => this.reset()}> Reset</button >
            </div>
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
