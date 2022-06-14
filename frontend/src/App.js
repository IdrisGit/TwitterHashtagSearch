import React, {Component} from 'react';
import SearchBox from './Components/SearchBox';
import FeedCard from './Components/FeedCard';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchField : ''
    }
  }

  onInputChange = (event) => {
    this.setState({searchField : event.target.value})
  }

  onButtonSubmit = () => {
    console.log(this.state.searchField)
  }

  render(){
    return (
      <div>
        <SearchBox onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        <FeedCard />
      </div>
    );
  }
}

export default App;
