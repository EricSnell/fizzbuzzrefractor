var results = document.getElementById('displayResults');

for (var i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        
        results.innerHTML += "FizzBuzz <br>";
    
    } else if (i % 3 == 0) {
    
        results.innerHTML += "Fizz <br>";
    
    } else if (i % 5 == 0) {
        
        results.innerHTML += "Buzz <br>";
    
    } else {
        
       results.innerHTML += i + "<br>";

    }

}