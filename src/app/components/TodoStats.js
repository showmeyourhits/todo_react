import React from 'react';
import ReactDOM from 'react-dom';


import {filters} from './../constants';


function Filter({filterKey}){
	return(
		<a href="#" onClick={e=>{
			e.preventDefault();

		}}>{filterKey[0] + filterKey.slice(1).toLowerCase()}</a>
		);
};


export default function({undone, handleFilter, handleDeleteDone}){

	const getNewFilterKey = (ev) => {
		if (ev.target.nodeName === "A"){
			ev.preventDefault();
			const filter = ev.target.textContent.toUpperCase(); 

			return filter;
		}else{
			return false;
		}
	}
	
	return (
		<div>
			<span>{undone > 0 ? `${undone} left.` : null}</span>
			<ul onClick={ev => {
				const newFilter = getNewFilterKey(ev);
				if (newFilter){
					handleFilter(filters[newFilter]);
				}
			}}>
				<li><Filter filterKey={filters.ALL}/></li>
				<li><Filter filterKey={filters.DONE}/></li>
				<li><Filter filterKey={filters.UNDONE}/></li>
			</ul>

			<button onClick={ev => handleDeleteDone()}>Delete em.</button>
		</div>
		);
};