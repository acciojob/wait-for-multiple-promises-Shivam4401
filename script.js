//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
	function createPromise () {
	return new Promise ((resolve,reject) => {
       let time = Math.floor(Math.random() * (3000-1000) +1000);
		setTimeout(() => {
			resolve(time);
		},time);
	});
}
 
let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

Promise.all([promise1,promise2,promise3]).then((data) => {
	console.log(data);
	document.getElementById("loading").remove();
	document.getElementById("output").innerHTML = `
    <tr> 
	  <td>Promise 1 </td>
	  <td>${data[0]} </td>
	</tr>
    <tr> 
	  <td>Promise 2 </td>
	  <td>${data[1]} </td>
	</tr>
    <tr> 
	  <td>Promise 3 </td>
	  <td>${data[2]} </td>
	</tr>
    <tr> 
	  <td>Total </td>
	  <td>${Math.max(...data)} </td>
	</tr>
`;
})

})












