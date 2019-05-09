import React, { Component } from 'react';
import GiphyList from '../GiphyContainer/GiphyContainer';



class MainSearchForm extends Component{
    constructor(){
        super();
        this.state = {
            gifs: [],
            loading: true
        }
    }
    componentWillMount(){
        this.getGiphys({search: ""});
    }

    getGiphys = async () => {
        const url = `https://api.giphy.com/v1/gifs/${this.props.query}?api_key=AWqW5zAzkEfXW9KFd8meD4EQIcL7wVxm&q=`;
        try{
            const gifs = await fetch(url);
            console.log(gifs, 'json gifs');
            if(!gifs.ok){
                throw Error(gifs.statusText);
            }
            const parsedGifs = await gifs.json();
            console.log(parsedGifs, 'parsed gifs');
            return parsedGifs;
        
        }catch(err) {
            console.log(err, '<-- error in MainSearch catch block');
            return err;
        } 
    }

    componentDidMount() {
        this.getGiphys().then((data) => {
            this.setState({
                gifs: data,
                loading: false
            })
        })
    }
    render(){
        return(
            <div className="SearchContainer">
                <h1 id="h1">Your search for {this.props.query} gifs: </h1>
                {this.state.loading ? <span>Data is loading...</span> : <GiphyList gifs={this.state.gifs}/>}
            </div>
        )
    }
}

export default MainSearchForm;
//`&limit=25&offset=1&rating=G&lang=en`