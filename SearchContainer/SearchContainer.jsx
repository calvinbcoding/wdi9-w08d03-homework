import React, { Component } from 'react';


class SearchContainer extends Component{
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchGiphys(this.state);
    }
   
    render(){
        console.log(this.state, 'search');
        return (
            <form onSubmit={this.handleSubmit}>
                Query giphys <input onChange = {this.handleChange} type="text" name="search" />
                <input type="submit" />
            </form>
            // <form className="ui_input" onSubmit={this.handleQuery}>
            //     <input id="input" type="search" name="query" placeholder="Search Giphy" onChange={this.handleInput}/><br/>
            //     <button id="button" color='red' size="small" type='submit' value='submit'>Search</button>
            // </form>
            
        )
    }
}

export default SearchContainer;