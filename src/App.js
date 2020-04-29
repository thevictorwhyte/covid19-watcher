import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      statistics:{},
    }
  }

   componentDidMount(){
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
      const all_data = data;
      this.setState({statistics: all_data});
      console.log(this.state);
      })
  }


  render(){
    const { statistics } = this.state;
      return !Object.keys(statistics).length  ? 
        <div> Nawa oh </div> :
      (
      <Homepage statistics={statistics} />
      );  
  }
}
export default App;
