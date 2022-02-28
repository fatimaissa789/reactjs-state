import "./App.css"; 
import "./style.css";
import React from "react";
// import button from "/"
import img from "./fatima.jpg";

class App extends React.Component {
  
  state = {
    fullname: "Fatima ndiaye",
    bio: "Lorem ipsum",
    ImgSrc: <img src={img} alt="img" width={'45px'}></img>,
    show: true,
  };


  open =() =>{
  this.setState({
    show: !this.state.show
  })
  }

  render() {
    
    const  timer= (1);
 
    setInterval(() => {
      timer(timer => timer + 1);
 
    }, 1000) 
   
    return (
      <div className="App-header">
        <button className="buttonStyle"onClick={this.open}>cliquez</button>
        {this.state.show ? (<><h1>{this.state.fullname}</h1><span className="">{this.state.bio}</span><br /><span>{this.state.ImgSrc}</span></>) : null}
        <br/>
     
       <h1>Chrono:{timer}</h1>
      </div>
    );
  }
}




export default App;
