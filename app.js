const input = document.getElementById("input");
const guessBtn =  document.getElementById("guess");
const ansText = document.getElementById("ans");
const ansDiv = document.getElementById("answare")
let clickTime = 0;
let inputData;
let number = () => {
    return Math.floor(Math.random()*10);
}


function answareFn(text){
    let h5 = document.createElement('h5');
        h5.appendChild(document.createTextNode(text))
        ansDiv.appendChild(h5)
}


input.addEventListener('input',(evt)=> {
    inputData = Number(evt.target.value);

})


guessBtn.addEventListener('click',()=> {
    clickTime++;
    if(clickTime <= 3){
        randomNum = number()
        input.value = '';
        // console.log(inputData, num)
        if(inputData === randomNum){
           answareFn('Correct Answare!! You Got It :D') 
            // ansText.textContent = '
        }else{
        answareFn('Wrong Answare.........Try Again :(')
        }
    }else{
        alert("You reached Maximum Guess!!")
        input.value = '';
    }
       
    
})

