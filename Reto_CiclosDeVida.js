import React, { Component } from 'react';

class Detalles extends Component {
       	state = { 
		data: [] 
	};
    	componentDidMount() {
    		fetch('https://amazon-api.items.com/data')
          			.then(response => 
         response.json() 
    )
    			.then(data => 
        this.setState({ data 
    }))
    			.catch(error => 
        console.log(error));
    	}
     	render() {
         		return ( 
			<div>
				<h1>About this item              </h1>
				<ul>
					{this.state.data.map(item => (
<li key={item.id}>{item.description}
</li>))}
         				</ul>
			</div>
		);
     	}   
    }
export default Detalles;