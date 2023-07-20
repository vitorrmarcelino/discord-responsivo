// function clickMenu(){
//     if(painelmenu.style.display == 'none'){
//         painelmenu.style.display = 'block'
//     }else{
//         painelmenu.style.display = 'none'
//     }
// }

// function Change(){
//     painelmenu.style.display = 'none'
// }






function clickMenu() {
    const painelmenu = document.getElementById('painelmenu');
  
    if (painelmenu.style.display === 'none') {
      // Configurar o menu para ser visível antes da animação
      painelmenu.style.display = 'block';
  
      // Aguardar um pequeno intervalo antes de aplicar a classe para permitir a animação
      setTimeout(() => {
        painelmenu.style.right = '0'; // Posição final do menu
      }, 10); // Pode ajustar o intervalo de espera conforme necessário
    } else {
      // Se o menu já estiver visível, animamos a saída
      painelmenu.style.right = '-350px'; // Posição inicial do menu
  
      // Aguardar o término da animação e, em seguida, definir o display como 'none'
      setTimeout(() => {
        painelmenu.style.display = 'none';
      }, 300); // Aguarde a mesma duração da animação (0.3 segundos) antes de ocultar
    }
  }
  