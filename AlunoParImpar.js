let listaAlunos = ["Diogo", "Gabriel", "Maria", "Esterfiton", "Everaldo", "Jessica", "Gloria", "Geisli", "Jorge", "Madalena", "Bruna"]


for(contador = 0; contador < listaAlunos.length; contador++){
   
    if (contador == 0) {
       
        console.log(`${contador} ZERO`)
   
    }else{

        if (contador % 2 == 0) {
            console.log(`${listaAlunos[contador]} esta na posição (${contador}) da lista, portando é (Par)`)
        }else{
            console.log(`${listaAlunos[contador]} esta na posição (${contador}) da lista, portando é (Impar)`)
        }

    }

    
}

