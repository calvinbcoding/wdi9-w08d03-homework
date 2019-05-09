import React, {Component} from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import './App.css';
import MainSearchForm from './MainSearch/MainSearch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      query: '',
      empty: true
    }
  }
  handleSearch = (query) => {
    console.log(query, '<---in app.js handlesearch');
    this.setState({
      query: query,
      empty: false
    })
  }
  
  render(){
    console.log(this.state, '<--in app.js');
    return (
      <div> 
        {!this.state.empty ? <MainSearchForm query={this.state.querty}/> : <SearchContainer handleSearch={this.hanldeSearch}/>}
      </div>
    )
  }      
}  
export default App;
  
  
  
  
  
