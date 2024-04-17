

const ageCalc = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    
    let idadeAnos = hoje.getFullYear() - nascimento.getFullYear();
    let idadeMeses = hoje.getMonth() - nascimento.getMonth();
    let idadeDias = hoje.getDate() - nascimento.getDate();

    if (idadeMeses < 0 || (idadeMeses === 0 && hoje.getDate() < nascimento.getDate())) {
        idadeAnos--;
        idadeMeses += 12;
    }

    if (idadeDias < 0) {
        const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        idadeMeses--;
        idadeDias += ultimoDiaMesAnterior;
    }

    return { years: idadeAnos, month: idadeMeses, days: idadeDias };
    
}


const renderResult = (age) => {
    const year = document.querySelector('.span__year')
    const month = document.querySelector('.span__month')
    const day = document.querySelector('.span__days')
    year.innerText = `${age.years}`
    month.innerText = `${age.month}`
    day.innerText = `${age.days}`
    
    
}

const btn = document.querySelector("#btnCalc")

btn.addEventListener('click', () => {
    const year = document.getElementById('year').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const dataNascimento = `${year}-${month}-${day}`
    const idade = ageCalc(dataNascimento)
    
    if(year != 0 && month != 0 && day !=0){
        renderResult(idade)
        document.getElementById('year').value = ''
        document.getElementById('month').value = ''
        document.getElementById('day').value = ''
    }else{
        alert('preencha os campos')
    }

    // renderResult(idade)
    // document.getElementById('year').value = 0
    // document.getElementById('month').value = 0
    // document.getElementById('day').value = 0
    
})

