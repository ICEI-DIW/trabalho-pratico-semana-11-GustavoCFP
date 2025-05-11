    const filmes = [
      {
        id: 1,
        titulo: "Caça-Fantasmas",
        imagem: "img/cacafantasmas.webp",
        descricao: "Em Nova York, três cientistas são demitidos e abrem um negócio de caça a fantasmas. Tudo muda quando encontram Dana Barrett.",
        sinopse: "Em Nova York Peter Venkman (Bill Murray), Ray Stantz (Dan Aykroyd) e Egon Spengler (Harold Ramis) são três cientistas do departamento de psicologia da Columbia University, que se dedicam ao estudo de casos paranormais. Quando a subvenção termina eles são despedidos e Venkman sugere que abram um negócio próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente eles só têm despesas e nenhum cliente, mas eis que surge Dana Barrett (Sigourney Weaver), uma violoncelista que teve uma experiência assustadora em seu apartamento.",
        genero: "Comédia, Fantasia",
        ano: 1984,
        duracao: 105,
        classificacao: "Livre"
      },
      {
        id: 2,
        titulo: "Jogador nº 1",
        imagem: "img/jogador.webp",
        descricao: "Em 2044, Wade precisa vencer um desafio virtual no OASIS e aprender a valorizar a vida real para conquistar a fortuna de Halliday.",
        sinopse: "Num futuro distópico, em 2044, Wade Watts (Tye Sheridan), como o resto da humanidade, prefere a realidade virtual do jogo OASIS ao mundo real. Quando o criador do jogo, o excêntrico James Halliday (Mark Rylance) morre, os jogadores devem descobrir a chave de um quebra-cabeça diabólico para conquistar sua fortuna inestimável. Para vencer, porém, Watts terá de abandonar a existência virtual e ceder a uma vida de amor e realidade da qual sempre tentou fugir.",
        genero: "Ação, Ficção Científica",
        ano: 2018,
        duracao: 140,
        classificacao: "Não recomendado para menores de 12 anos"
      },
      {
        id: 3,
        titulo: "Maze Runner",
        imagem: "img/maze.jpg",
        descricao: "Thomas acorda sem memória em um labirinto. Com outros jovens, ele precisa entender onde está e como escapar.",
        sinopse: "Em um mundo pós-apocalíptico, o jovem Thomas (Dylan O'Brien) é abandonado em uma comunidade isolada formada por garotos após toda sua memória ter sido apagada. Logo ele se vê preso em um labirinto, onde será preciso unir forças com outros jovens para que consiga escapar.",
        genero: "Ação, Aventura",
        ano: 2014,
        duracao: 114,
        classificacao: "Não recomendado para menores de 14 anos"
      },
      {
        id: 4,
        titulo: "O Lorax",
        imagem: "img/the-lorax-movie-poster.jpg",
        descricao: "Ted parte em busca de uma árvore de verdade para impressionar sua paixão e conhece o protetor da floresta: Lorax.",
        sinopse: "O menino Ted (Zac Efron) descobriu que o sonho de sua paixão, a bela Audrey (Taylor Swift), é ver uma árvore de verdade, algo em extinção. Disposto a realizar este desejo, ele embarca numa aventura por uma terra desconhecida, cheia de cor, natureza e árvores. É lá que conhece também o simpático e ao mesmo tempo rabugento Lorax (Danny DeVito), uma criatura curiosa preocupada com o futuro de seu próprio mundo.",
        genero: "Animação, Família",
        ano: 2012,
        duracao: 87,
        classificacao: "Livre"
      },
      {
        id: 5,
        titulo: "Conclave",
        imagem: "img/conclave.jpg",
        descricao: "Após a morte do Papa, o Cardeal Lomeli lidera o conclave para eleger seu sucessor, mas descobre um segredo que pode abalar toda a Igreja.",
        sinopse: "O papa está morto e agora é preciso reunir o colégio de cardeais para decidir quem será o novo pontífice. Em Conclave, acompanhamos um dos eventos mais secretos do mundo: a escolha de um novo Papa. Lawrence (Ralph Fiennes), conhecido também como Cardeal Lomeli, é o encarregado de executar essa reunião confidencial após a morte inesperada do amado e atual pontífice. Sem entender o motivo, Lawrence foi escolhido a dedo para conduzir o conclave como última ordem do papa antes de morrer. Assim sendo, os líderes mais poderosos da Igreja Católica vindos do mundo todo se reúnem nos corredores do Vaticano para participar da seleção e deliberar suas opções, cada um com seus próprios interesses. Lawrence, então, acaba no centro de uma conspiração e descobre um segredo do falecido pontífice que pode abalar os próprios alicerces da Igreja. Em jogo, estão não só a fé, mas os próprios alicerces da instituição diante de uma série de reviravoltas que tomam conta dessa assembleia sigilosa.",
        genero: "Suspense, Mistério",
        ano: 2024,
        duracao: 120,
        classificacao: "Não recomendado para menores de 12 anos"
      },
      {
        id: 6,
        titulo: "Deu a Louca na Chapeuzinho",
        imagem: "img/chapeuzinho.jpg",
        descricao: "Um roubo na floresta envolve vários suspeitos, e o inspetor Nick Pirueta precisa descobrir quem está falando a verdade.",
        sinopse: "A tranquilidade da vida na floresta é alterada quando um livro de receitas é roubado. Os suspeitos do crime são Chapeuzinho Vermelho, o Lobo Mau, o Lenhador e a Vovó, mas cada um deles conta uma história diferente sobre o ocorrido. Cabe então ao inspetor Nick Pirueta investigar o caso e descobrir a verdade.",
        genero: "Animação, Comédia",
        ano: 2004,
        duracao: 80,
        classificacao: "Livre"
      },
      {
        id: 7,
        titulo: "Magnatas do Crime",
        imagem: "img/magnatas.webp",
        descricao: "Um poderoso traficante tenta vender seu império de maconha, mas a negociação desencadeia assassinatos, chantagens e disputas entre criminosos e magnatas.",
        sinopse: "Magnatas do Crime acompanha um traficante graduado em Oxford que usa suas habilidades para criar um império de maconha. Porém, quando ele tenta vendê-lo para um colega americano bilionário, uma série de eventos passa a se desenrolar, envolvendo assassinato, chantagens, oligarcas russos, gangsters da Tríade e jornalistas corruptos.",
        genero: "Ação, Policial",
        ano: 2019,
        duracao: 113,
        classificacao: "Não recomendado para menores de 16 anos"
      },
      {
        id: 8,
        titulo: "Lucas, Um Intruso no Formigueiro",
        imagem: "img/Lucas.jpg",
        descricao: "Lucas, um garoto solitário, destrói um formigueiro e é magicamente encolhido ao tamanho de uma formiga, sendo forçado a reparar o dano que causou.",
        sinopse: "Lucas Nickle (Zach Tyler) é um garotinho de dez anos que acaba de se mudar para uma nova vizinhança. Sem amigos e com uma família ausente, ele é constantemente atacado por uma gangue local. Certo dia, ele joga toda sua raiva para fora e afoga um formigueiro com sua pistola d'água. O menino tem seu tamanho misteriosamente diminuído, até ficar da mesma altura que uma formiga. Ele é então obrigado a trabalhar como escravo na reconstrução do formigueiro que ele mesmo destruiu.",
        genero: "Animação, Família, comédia",
        ano: 2012,
        duracao: 89,
        classificacao: "Livre"
      }
    ];
  

    const page = window.location.pathname.split("/").pop();
  
    if (page === "index.html") {

      const listaFilmes = document.getElementById("lista-filmes");
  
      filmes.forEach(filme => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
  
        col.innerHTML = `
          <div class="card bg-secondary text-white h-100">
            <img src="${filme.imagem}" class="card-img-top border-warning border-bottom" alt="Cartaz do filme ${filme.titulo}" />
            <div class="card-body">
              <h5 class="card-title">${filme.titulo}</h5>
              <p class="card-text">${filme.descricao}</p>
              <a href="detalhes.html?id=${filme.id}" class="btn btn-warning">Ver Detalhes</a>
            </div>
          </div>
        `;
  
        listaFilmes.appendChild(col);
      });
    }
  
    if (page === "detalhes.html") {
      const urlParams = new URLSearchParams(window.location.search);
      const filmeId = parseInt(urlParams.get("id"));
    
      if (filmeId) {
        const filme = filmes.find(f => f.id === filmeId);
    
        if (filme) {
          document.getElementById("titulo-filme").textContent = filme.titulo;
          document.getElementById("imagem-filme").src = filme.imagem;
          document.getElementById("imagem-filme").alt = `Cartaz do filme ${filme.titulo}`;
          document.getElementById("sinopse-filme").textContent = filme.sinopse;
          document.getElementById("genero-filme").textContent = filme.genero;
          document.getElementById("ano-filme").textContent = filme.ano;
          document.getElementById("duracao-filme").textContent = filme.duracao;
          document.getElementById("classificacao-filme").textContent = filme.classificacao;
        } else {
          document.getElementById("titulo-filme").textContent = "Filme não encontrado";
          document.getElementById("sinopse-filme").textContent = "Desculpe, não conseguimos encontrar o filme solicitado.";
          document.getElementById("genero-filme").textContent = "";
          document.getElementById("ano-filme").textContent = "";
          document.getElementById("duracao-filme").textContent = "";
          document.getElementById("classificacao-filme").textContent = "";
        }
      } else {
        document.getElementById("titulo-filme").textContent = "ID inválido";
        document.getElementById("sinopse-filme").textContent = "Nenhum ID de filme foi passado na URL.";
        document.getElementById("genero-filme").textContent = "";
        document.getElementById("ano-filme").textContent = "";
        document.getElementById("duracao-filme").textContent = "";
        document.getElementById("classificacao-filme").textContent = "";
      }
    }