import React from 'react';
import ReactDOM from 'react-dom';


import {filters} from './../constants';


function Filter({currentFilterKey, filterKey}){
	if (currentFilterKey === filterKey){
		return (
			<span>{filterKey[0] + filterKey.slice(1).toLowerCase()}</span>
			);
	}
	return(
		<a href="#" onClick={e=>{
			e.preventDefault();

		}}>{filterKey[0] + filterKey.slice(1).toLowerCase()}</a>
		);
};


export default function({undone, done, filterKey, deleteDone, filterList}){

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
		<div className={"todo-stats " + ((undone + done) === 0 ? "hide " : "")}>
			<span className="todo-stats__undone">{undone > 0 ? `${undone} left.` : null}</span>
			<ul onClick={ev => {
				const newFilter = getNewFilterKey(ev);
				if (newFilter){
					filterList(newFilter);
				}
			}}
			className="filters">
				<li><Filter currentFilterKey={filterKey} filterKey={filters.ALL}/></li>
				<li><Filter currentFilterKey={filterKey} filterKey={filters.DONE}/></li>
				<li><Filter currentFilterKey={filterKey} filterKey={filters.UNDONE}/></li>
			</ul>

			<button className={"todo-stats__del-done " + (done === 0 ? 'hide ' : '')}
			onClick={deleteDone}>Delete done</button>
		</div>
		);
};