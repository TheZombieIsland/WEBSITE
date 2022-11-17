
    function dátumlekérés () {
        let date = new Date();
        console.log(date)
    };


    let counter = 1;
    setInterval(() => {
        document.getElementById("datareload").innerText = counter;
        counter++;
        if(counter > 5) (counter = 0,console.clear(), startdatumlekeres());
    }, 120);


    function startdatumlekeres() {
        dátumlekérés()
    }
        startdatumlekeres()
