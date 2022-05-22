let D = new Date();


document.getElementById("time").innerHTML =D.toLocaleTimeString();
document.getElementById("date").innerHTML =D.toLocaleDateString();
let t;
function start(){ 
    t =setInterval(() => {
        let x = new Date();
        document.getElementById("time").innerHTML = x.toLocaleTimeString()
        
    }, 1000);
}
function stop(){
    clearInterval(t)
}


