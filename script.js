function updateClock() {
    
    // Creating date object
    let date = new Date();
    let getHours = date.getHours();
    let getSeconds = date.getSeconds();
    let getMinutes = date.getMinutes();
    let ampm = getHours >= 12 ? "PM" : "AM";
    
    //Converting hours
    let convertedHours = getHours % 12;
    getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
    getSeconds = getSeconds < 10 ? '0' + getSeconds : getSeconds;
    
    //Using template literals
    let str = ` ${convertedHours}:${getMinutes}:${getSeconds} ${ampm}`;
    headingEl.innerText = str;
}
updateClock();
setInterval(updateClock, 1000);
