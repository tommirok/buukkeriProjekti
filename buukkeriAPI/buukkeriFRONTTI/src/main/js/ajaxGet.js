 

const LOCALHOST = 'http://localhost:8090/';




// ajax calls
export function callBookker(url){
	return new Promise((resolve, reject)=>{
		const call = new XMLHttpRequest();
		call.open("GET",LOCALHOST+url);
		call.onload = ()=> resolve(call.responseText);
		call.onerror = ()=> reject(call.statusText);
		call.send();
	});
}
