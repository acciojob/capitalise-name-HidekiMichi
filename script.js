//your JS code here. If required.
let ele=document.querySelector('#fname');
document.addEventListener('click',()=>{
	let str=ele.value;
	ele.value=str.toUpperCase();
});
