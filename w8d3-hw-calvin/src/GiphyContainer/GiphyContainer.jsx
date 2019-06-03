import React, { Component } from 'react';
import GiphySearchForm from '../GiphySeachForm/GiphySearchForm'


class GiphyContainer extends Component{
    constructor(){
        super();
        this.state = {
            giphy: []
        }
    }

    searchGiphys = async (formData) => {
        let searchURL = `http://api.giphy.com/v1/gifs/search?q=${formData.search}&api_key=AWqW5zAzkEfXW9KFd8meD4EQIcL7wVxm`;
        // try{
            const result = await fetch(searchURL);
			console.log(result, 'json gifs');
            const parsedResult = await result.json()
            console.log(parsedResult, "<--------parsedResult")
			this.setState({
				giphy: parsedResult.data
            })
    }
            

    render(){
		console.log(this.state, "<------this.state in the render block of GiphyContainer")
		const giphyList = this.state.giphy.map((gif, i)=>{
			return(
				<div key={i}>
					<img src={gif.images.downsized_medium.url} alt="this.giphy"/>
				</div>
			)
		})
		return(
            <div className="SearchContainer">
				<h2>Giphy Container</h2>
				<GiphySearchForm searchGiphys={this.searchGiphys}></GiphySearchForm>
				{giphyList}
               
            </div>
        )
    }
}

export default GiphyContainer;

