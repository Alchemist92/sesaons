
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

// app component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div> Hi There!</div>
// }

class App extends React.Component {
  // used for the state initilisation
  // constructor(props) {
  //   super(props);

  //   this.state = {lat : null, errorMessage: ""}

  // }
  state = {lat : null, errorMessage: ""};

  // component did mount
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  // required by react
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat= {this.state.lat}/>
    }

    return <Spinner message = "please accept location request"/>
  }
}

// render to html file
ReactDOM.render(<App/>, document.querySelector("#root"));