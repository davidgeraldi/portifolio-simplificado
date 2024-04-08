/*alert('oi'); -->cria uma alerta que ao recarregar a pagina abre um popup com o alerta*/

/* 
OBJETIVO 1: Quando o usuario clicar no botão mostrar mais deve abrir os projetos que estão escondidos no html
    Passo 1 - pegar o botao mostrar mais no JS pra poder verificar clicar em cima dele

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe "ativo nos projetos escondidos

OBJETIVO 2: Esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele*/ 

//objetos e metodos em JS 

//metodo: document.getElementById('botao)  --> esse metodo pede que o botao criado no html seja pego do html e passado pro js

//console.log(document); --> acessa as informações desejada no console do site//

//console.log(document.querySelector('.btn-mostrar-projetos')); //busca o elemento do botao no html//

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');//o const nao permite mudar o calor do botao, ja o "let" permitiriaa//

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');//busca os elementos que tem a classe projeto porem nao tem a classe ativo. O querySelectorAll pega todos os elementos, diferente do querySelector que só pega um elemento de determinada classe.

//com a variavel botao criada podemos usa-las depois apenas chamando pelo nome//

//Passo 2: identificar o clique do botao:

botaoMostrarProjetos.addEventListener('click', () => {
    //bloco de execução da função seta//
    //passo 3: adicionar a classe ativo nos projetos escondidos:
    
    projetosInativos.forEach(projetoInativo => {//foeach significa para cada, entao para cada projeto inativo executar tal ação, que é representada por =>{}//
        projetoInativo.classList.add('ativo');//o classlist busca todas as classe que estao dentro da classe superior, e o add adiciona uma nova classe nele
    }
    );
    //ultima coisa é esconder o botao ao ser clicado:
    botaoMostrarProjetos.classList.add('remover');
});

//para criar uma função seleciona o bloco desejado, clica co o lado direito, vai em refatorar, extrair para function no escopo global, dar o nome pra função e ela será criada//

