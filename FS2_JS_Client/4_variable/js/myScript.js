try{
var num = [1, 2, 3, 4, 5];
var words = ['hey', 'hello', 'bye', 'morning', 'evening'];
var newArray = JSON.stringify(num.concat(words));

var value = document.getElementById('display');
var Parray = document.createElement('p');
Parray.innerHTML = newArray   ;
value.appendChild(Parray);
} catch(err){
    console.log("error occurred");
}