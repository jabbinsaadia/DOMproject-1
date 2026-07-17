let btn = document.getElementById('togglebtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', togglebulb)
function togglebulb(e){
    if (btn.textContent.includes('on')){
        bulb.src="./assests1/bulb_on.png"
        btn.textContent = "Turn off"
    }
    else{
        bulb.src="./assests1/bulb_off.png"
        btn.textContent ="turn On"
    }
}