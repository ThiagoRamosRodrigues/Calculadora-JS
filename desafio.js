function somatorioMultiplos(num) {
    let soma = 0;
  
    for (let i = 1; i < num; i++) {
      
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
  
    return soma;
  }
  console.log(somatorioMultiplos(10)); 
  console.log(somatorioMultiplos(11)); 
  console.log(somatorioMultiplos(5));  
  console.log(somatorioMultiplos(15)); 
  console.log(somatorioMultiplos(20)); 

  //Para rodar o desafio no Visual Studio Code (VS Code), você precisará de um ambiente Node.js instalado em sua máquina.