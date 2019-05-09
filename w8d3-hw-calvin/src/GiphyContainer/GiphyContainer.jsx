import React from 'react';



const GiphyContainer = (props) => {
	const giphyList = props.gifs.data.map((gif, i) => {
		return (
			<ul key={i}>
			<img src={gif.images.downsized.url} alt="gif images"></img>

			</ul>
		)
	})

	return(
		<div className="giphyContainer">
			{giphyList}
		</div>
	)
}

export default GiphyContainer;