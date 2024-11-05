function criaCartao(categoria,pergunta,resposta){
   let container = document.getElementById('conteiner')
   let article = document.createElement('article')
   article.className  = 'cartao'
   article.innerHTML = `
   <div class="cartao-conteudo">
      <h3> ${categoria} </h3>
      <div class="cartao-conteudo-pergunta">
         <p> ${pergunta} </p>
      </div>
      <div class="cartao-conteudo-resposta">
         <p>${resposta} </p>
      </div>
   </div>

   `
   container.appendChild(article)
}
criaCartao( 'Biologia', 'Qual a função da mitocondria?', 'Produção de energia')
criaCartao( 'Historia', 'Quem descobriu o Brasil?', 'Pedro Alvares Cabral')   
criaCartao( 'Arte', 'Quem pintou a noite estrelada?', 'Vincent Van Gogh')   
criaCartao( 'Arte', 'Em que ano foi pintada a Monalisa?', '1503')
