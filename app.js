var btnTranslator = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
function clickHandler()
{
    console.log("Clicked!!")
    console.log("Input : " +txtInput.value)
}
btnTranslator.addEventListener("click",clickHandler)