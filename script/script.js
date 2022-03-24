
let button = document.getElementById('btn')


button.addEventListener('click', function show(){

let nameU = document.getElementById("name").value;
let ageU= document.getElementById("age").value

let select= document.getElementById('sele').value
let text = document.getElementById("text");

let pdf= document.getElementById("pdf")

function validate(){
  
switch (pdf) {
    case pdf.style.display==='block':
        pdf.style.display = 'none'
        break;
    default:
        pdf.style.display = 'block'
        break;
}  
}
if(select ==="selecione"){
     text.innerHTML= "Selecione uma opção válida"
    pdf.style.display ==='none'
   
}else{
    validate()
}

text.innerHTML = "Nome: " +nameU +"|" +"\nIdade: " +ageU +"|"+ "\nSou :  " + select
})




