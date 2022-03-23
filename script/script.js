
let button = document.getElementById('btn')


button.addEventListener('click', function show(){

let nameU = document.getElementById("name").value;
let ageU= document.getElementById("age").value

let select= document.getElementById('sele').value
let text = document.getElementById("text");

let pdf= document.getElementById("pdf")

if(pdf.style.display ==='block'){
    pdf.style.display = 'none'
}else {
    pdf.style.display = 'block'
}
/*console.log(nameU);
console.log(ageU);
console.log(select); */


text.innerHTML = "Nome: " +nameU +"\nIdade: " +ageU + "\nNivel:  " + select
})




