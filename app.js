function changeColor(){
    for(let i=1;i<=9;i++){
        const num1=Math.floor(Math.random()*256)
        const num2=Math.floor(Math.random()*256)
        const num3=Math.floor(Math.random()*256) 
        const classA=document.querySelector(".box:nth-child("+i+")")
        classA.style='background-color:rgb('+num1+','+num2+','+num3+')'
    }
    return 0;
}
changeColor()