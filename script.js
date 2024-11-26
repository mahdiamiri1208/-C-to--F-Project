let $ = document

let input = $.getElementById('converter')
let lable = $.getElementById('leble')
let convertButton = $.querySelector('.convertButton')
let resetButton = $.querySelector('.resetButton')
let changeButton = $.querySelector('.changeButton')
let resultBox = $.querySelector('.result')
let C_to_F = true
let result
convertButton.addEventListener('click', function (){
    let inputValue = input.value
    if(!inputValue || isNaN(inputValue)){
        resultBox.innerHTML = 'Write correct value!'
        resultBox.style.color = 'red'
    }
    else if(C_to_F){
        result = (inputValue * 9/5) + 32
        resultBox.innerHTML = inputValue + '°C = ' + result.toFixed(2) + '°F'
        resultBox.style.display = 'block'
        resultBox.style.color = 'rgb(255, 255, 102)'
    }
    else{
        result = (inputValue - 32) * 5/9
        resultBox.innerHTML = inputValue + '°F = ' + result.toFixed(2) + '°C'
        resultBox.style.display = 'block'
        resultBox.style.color = 'rgb(255, 255, 102)'
    
    }
})

resetButton.addEventListener('click', function (){
    resultBox.innerHTML = ''
    input.value = ''
})

changeButton.addEventListener('click', function (){
    if(C_to_F){
        lable.innerHTML = 'Converter <span class="F">°F</span> to <span class="C">°C</span>'
        C_to_F = false
        input.placeholder = '°F'
        $.title = 'SalzLearn| Js | °F to °C'
    }
    else{
        lable.innerHTML = 'Converter <span class="C">°C</span> to <span class="F">°F</span>'
        C_to_F = true
        input.placeholder = '°C'
        $.title = 'SalzLearn| Js | °C to °F'
    }
})