try {

  alert('Words inside the lists');

console.log('success');

}

catch(err) {

  document.getElementById("msgBox").innerHTML = err.message;

}
