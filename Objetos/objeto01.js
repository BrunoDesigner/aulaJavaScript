let amigo = {nome:'Jose', Sexo:'M', Peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.Peso += p
    }}

    amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.Peso}kg`)