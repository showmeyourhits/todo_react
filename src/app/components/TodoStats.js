import React from 'react';
import ReactDOM from 'react-dom';



function Filter({filter}){
	return(
		<a href="#" onClick={e=>{
			e.preventDefault();
			console.log(`Filtering ${filter}`);

		}}> {filter[0] + filter.slice(1).toLowerCase()} </a>
		);
};


export default function({undone}){
	return (
		<div>
			<span>{undone > 0 ? `${undone} left.` : null}</span>
			<ul>
				<li><Filter filter="ALL"/></li>
				<li><Filter filter="DONE"/></li>
				<li><Filter filter="UNDONE"/></li>
			</ul>
			<button>Delete em.</button>
		</div>
		);
};