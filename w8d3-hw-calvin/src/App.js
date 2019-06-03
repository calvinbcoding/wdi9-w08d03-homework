import React, {Component} from 'react';
import GiphyContainer from './GiphyContainer/GiphyContainer';
import './App.css';
//import MainSearchForm from './GiphySeachForm/GiphySearchForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
     chosenPage: null
    }
  }
  handleSearch = (e) => {
    console.log(e.target.id, '<---in app.js handlesearch');
    this.setState({
      chosenPage: e.target.id
    })
  }
  
  render(){
    console.log(this.state, '<--in app.js');
    return (
      <div>
        <h3>Giphy Seach</h3> 
        <button onClick={this.handleSearch} id="giphys"> Show Searchbar </button>
        {
          this.state.chosenPage === null ?
            null
            :
            <GiphyContainer></GiphyContainer>
           
        }
      </div>
    );
  }      
}  
export default App;
  
  
//{!this.state.empty ? <MainSearchForm query={this.state.query}/> : <SearchContainer handleSearch={this.hanldeSearch}/>}
  
  
