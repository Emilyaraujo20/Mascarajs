let a = document.querySelector("#cpf")

// querySelector: tag, id, classe
// para o id a classe utilizar a mesma notação usada pelo css

// () função anonima
// => arrow function
// function nome()
a.addEventListener("keypress", () => {

let  inputlength = a.value.length
if(inputlength==3 || inputlength==7) {
    a.value+= "."
}
else if (inputlength==11)  {
    a.value+="-"
}
// input.value = input.value"."
})

let b = document.querySelector("#cnpj")


b.addEventListener("keypress", () => {

    let  inputlength = b.value.length
    if(inputlength==2 || inputlength==6){
        b.value+= "."
    }
    else if (inputlength==10){
        b.value+="/"
    }


    else if (inputlength==15)  {
        b.value+="-"
    }
    

}) 