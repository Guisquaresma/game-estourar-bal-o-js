function addBola() {
	var bola = document.createElement("div"); /*Cria um elemento e armazena na variavel bola*/
	
	bola.setAttribute("class", "bola"); /*Adiciona o atributo class no bola*/

	var p1 = Math.floor(Math.random() * 500); /* Irá gera um numero aleatorio, multiplicando por 500 vai gerar um numero de 0 a 500 decimal, para transforma o numero inteiro utilizar o flooor */	
	var p2 = Math.floor(Math.random() * 400); /* Irá gera um numero aleatorio, multiplicando por 500 vai gerar um numero de 0 a 500 decimal, para transforma o numero inteiro utilizar o flooor */

	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;"); /*Inserir valores do p1 e p2 na div bola*/
	bola.setAttribute("onclick", "estourar(this)"); /*Criar a ação de click*/ /*this - É o proprio elemento como parametro*/ /*Colocar na tela*/
		
	document.body.appendChild(bola); /*Pegar conteudo do site e adicionar um elemento novo*/	
}

function estourar(elemento) { /*SEGUNDA PARTE: Função pra Estourar*/
	document.body.removeChild(elemento); /*Remove o elementoo na tela*/
}


function addBola2() {
	var bola2 = document.createElement("div"); /*Cria um elemento e armazena na variavel bola*/
	
	bola2.setAttribute("class", "bola2"); /*Adiciona o atributo class no bola*/

	var b1 = Math.floor(Math.random() * 500); /* Irá gera um numero aleatorio, multiplicando por 500 vai gerar um numero de 0 a 500 decimal, para transforma o numero inteiro utilizar o flooor */	
	var b2 = Math.floor(Math.random() * 400); /* Irá gera um numero aleatorio, multiplicando por 500 vai gerar um numero de 0 a 500 decimal, para transforma o numero inteiro utilizar o flooor */

	bola2.setAttribute("style", "left:"+b1+"px;top:"+b2+"px;"); /*Inserir valores do p1 e p2 na div bola*/
	bola2.setAttribute("onclick", "estourar2(this)"); /*Criar a ação de click*/ /*this - É o proprio elemento como parametro*/ /*Colocar na tela*/
		
	document.body.appendChild(bola2); /*Pegar conteudo do site e adicionar um elemento novo*/	
}

function estourar2(elemento){
	if (document.body.removeChild(elemento)){
		alert("Você perdeu! \n Reinicie o jogo");
	}
}

function iniciar() { /* De tempo em tempo executara função*/
	setInterval(addBola, 500); /*1000 = 1 Segundo*/
	setInterval(addBola2, 5000);
}

