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

function iniciar() { /* De tempo em tempo executara função*/
	setInterval(addBola, 500); /*1000 = 1 Segundo*/
}