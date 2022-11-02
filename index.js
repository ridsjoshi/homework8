// USING FETCH
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ef562868d9mshfcefdc0a1c781dcp1cf97ejsn4b0ec8418cb4',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
    }
};

fetch('https://jokeapi-v2.p.rapidapi.com/joke/Misc,Programming?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist&safe-mode=safe-mode', options)
    .then(response => response.json())
    .then(function(response){
        //call function that prints the response to the webpage and console
        printing(response)
    })
    .catch(err => console.error(err));

function printing(obj){
    // log response in json form to console and
    console.log(obj);
    // print it into the webpage
    document.getElementById("part1").innerHTML = obj.setup;
    document.getElementById("part2").innerHTML = obj.delivery;

    // print it to the webpage as a string
    const output = JSON.stringify(obj);
    document.getElementById("joke").innerHTML = output;

}

// USING AJAX
const data = null;
const req = new XMLHttpRequest();
if (! req)
{
    alert("Unable to create HTTPRequest object");
}

req.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        // parse the data received and log it to console
        const newdata = JSON.parse(this.responseText);
        console.log(newdata);
        // output the data in string form to the web page
        const output2 = JSON.stringify(newdata);
        document.getElementById("joke2").innerHTML = output2;
    }
});

req.open("GET", "https://jokeapi-v2.p.rapidapi.com/joke/Misc,Programming?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist&safe-mode=safe-mode");
req.setRequestHeader("X-RapidAPI-Key", "ef562868d9mshfcefdc0a1c781dcp1cf97ejsn4b0ec8418cb4");
req.setRequestHeader("X-RapidAPI-Host", "jokeapi-v2.p.rapidapi.com");
req.send(data);

