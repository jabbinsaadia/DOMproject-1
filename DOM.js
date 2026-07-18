let btn = document.getElementById('togglebtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', togglebulb)
function togglebulb(e){
    if (btn.textContent.includes('on')){
        bulb.src="./assets/bulb_on.png"
        btn.textContent = "Turn off"
    }
    else{
        bulb.src="./assets/bulb_off.png"
        btn.textContent ="turn On"
    }
}