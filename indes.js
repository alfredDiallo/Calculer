const buttons=document.querySelectorAll('.btn');
const result=document.getElementById('result');
buttons.forEach((button) =>{
    button.addEventListener('click',(e)=>{
    result.textContent+=e.target.id
    });
});
equal.addEventListener('click',(e)=>{
    result.textContent=eval(result.textContent)
})
const clear=document.getElementById('clear')
clear.addEventListener('click',(e)=>{
    result.textContent=""
}
)