const API_URL = "http://localhost:3000/filmes";
const page = window.location.pathname.split("/").pop();

if (page === "index.html" || page === "") {
  const listaFilmes = document.getElementById("lista-filmes");

  fetch(API_URL)
    .then(response => response.json())
    .then(filmes => {
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
    })
    .catch(error => {
      listaFilmes.innerHTML = `<p>Erro ao carregar filmes: ${error.message}</p>`;
    });
}

if (page === "detalhes.html") {
  const urlParams = new URLSearchParams(window.location.search);
  const filmeId = urlParams.get("id");

  if (filmeId) {
    fetch(`${API_URL}/${filmeId}`)
      .then(response => {
        if (!response.ok) throw new Error("Filme não encontrado.");
        return response.json();
      })
      .then(filme => {
        document.getElementById("titulo-filme").textContent = filme.titulo;
        document.getElementById("imagem-filme").src = filme.imagem;
        document.getElementById("imagem-filme").alt = `Cartaz do filme ${filme.titulo}`;
        document.getElementById("sinopse-filme").textContent = filme.sinopse;
        document.getElementById("genero-filme").textContent = filme.genero;
        document.getElementById("ano-filme").textContent = filme.ano;
        document.getElementById("duracao-filme").textContent = filme.duracao;
        document.getElementById("classificacao-filme").textContent = filme.classificacao;
      })
      .catch(error => {
        document.getElementById("titulo-filme").textContent = "Erro ao carregar filme";
        document.getElementById("sinopse-filme").textContent = error.message;
      });
  } else {
    document.getElementById("titulo-filme").textContent = "ID inválido";
    document.getElementById("sinopse-filme").textContent = "Nenhum ID foi fornecido.";
  }
}