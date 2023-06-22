let allElements=document.getElementsByClassName('underline-on-hover')
let elementsArray=Array.from(allElements)
elementsArray.forEach((value) => {
    value.addEventListener('click', ()=>{
        removeall(elementsArray)
        value.classList.add("active")
    })
})
function removeall(array){
    array.forEach((value) => {
        value.classList.remove('active')
    })
}