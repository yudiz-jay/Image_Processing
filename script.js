var Timer;

function getValue() {
    var nSecond = parseInt(document.getElementById("nSecond").value);
    if (nSecond > 0) {
        var sUrl = "https://dog.ceo/api/breeds/image/random";
        if(Timer){
            clearInterval(Timer);
        }
        Timer = setInterval(() => {

            fetch(sUrl).then((response) => {
                return response.json();
            })
                .then((data) => {
                    document.getElementById("imgPicture").src = data.message;
                    console.log(Timer); 
                })
                .catch((error) => {
                    console.log("Error: " + error);
                })
        }, nSecond * 1000);
    }
    else {
        alert("Please Enter a numeric Value");
    }

}

