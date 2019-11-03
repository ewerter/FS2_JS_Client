try{


    function validateForm() {
        var x = document.getElementById('userid').value;
        if (x == "") {
          alert("Name should be filled it");
          return false;
        }
      } 
} catch(err){
    console.log("error occurrred");
}  