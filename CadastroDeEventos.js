let dataAtual = new Date()

//___________________________________________________
//Mude a data para uma data a frente ou passada, de sua Data Atual.
//Mude a idade para 17.
//Mude o numero de participantes para 4 ou menos.
let dataEvento = new Date('03/05/2022')
let idadeParticipante = 18      
let numeroMaxParticipantes = 100
//___________________________________________________

let listaParticipantes = ["Jorge", "Roberto", "Beltrano", "Jean"]

while (listaParticipantes.length < numeroMaxParticipantes) {
    
    if (idadeParticipante >= 18) {
        console.log("Idade confirmada com sucesso.")
    
        if (dataEvento > dataAtual) {
            console.log("Data do Evento confirmada com sucesso.")
            console.log("Você foi cadastrado no evento com sucesso, seu nome já esta na lista: ")
            console.log("Participantes> ",listaParticipantes)
        } else {
            console.log("Cadastro nao permitido, Data Invalida")
        }
    
    } else {
        console.log("Precisa ser maior de 18 anos, cadastro nao permitido!")
    }
    
    break;
}

if (listaParticipantes.length >= numeroMaxParticipantes) {
    console.log(`Limite excedido, este evento já tem ${numeroMaxParticipantes} participantes cadastrados!`)
}