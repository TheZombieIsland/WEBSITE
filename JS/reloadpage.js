    let counter = 1;
    setInterval(() => {
        document.getElementById("datareload").innerText = counter;
        counter++;
        if(counter > 5) location.reload();
    }, 1000);
