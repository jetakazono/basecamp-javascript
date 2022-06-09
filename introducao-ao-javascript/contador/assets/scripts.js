var $currentNumberWrapper = document.getElementById('currentNumber');
var $currentNumber = document.querySelector('#currentNumber')
var $increment = document.querySelector('#increment')
var $decrement = document.querySelector('#decrement')
var currentNumber = 0;

function increment(){
    if(currentNumber >= 10) return 

    currentNumber = currentNumber + 1;
    $currentNumberWrapper.innerHTML = currentNumber;
    
    checkNegativeNumber()
    toggleActions()
}

function decrement(){
    if(currentNumber <= 0) return 

    currentNumber = currentNumber -1;
    $currentNumberWrapper.innerHTML = currentNumber;

    checkNegativeNumber()
    toggleActions()
}

function checkNegativeNumber(){
    if(currentNumber < 0)
        $currentNumber.style.color = "red"
    else
        $currentNumber.style.color = ''
}

function toggleActions(){
    if(currentNumber >= 10) $increment.classList.add('disable')
    else $increment.classList.remove('disable')

    if(currentNumber <= 0) $decrement.classList.add('disable')
    else $decrement.classList.remove('disable')
}

$increment.addEventListener('click', increment);
$decrement.addEventListener('click', decrement);


