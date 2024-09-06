let produtos = [];
let counter = 0;

const ordemAlfabetica = (elementosDoSelect) => { 
  let elementos = Array.from(elementosDoSelect.options);
  elementos.sort((a, b) => a.text.localeCompare(b.text));
  elementosDoSelect.innerHTML = "";
  elementos.forEach(item => elementosDoSelect.add(item));
}

function idsSequenciais() {
  return counter++;
}

const elementosDoSelect = document.getElementById('categoria');
ordemAlfabetica(elementosDoSelect);

// Adiciona um evento que fica ouvindo o submit do form
// Ou seja assim que o form for enviado vai executar o código do callback
document
  .getElementById("supermarketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página por causa do submit do form

    // Obtendo os valores inseridos no formulário
    let id = idsSequenciais();
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const categoria = document.getElementById("categoria").value;

    // adicionando os valores na lista de tarefas para printar no console
    produtos.push({
      id,
      produto,
      quantidade,
      categoria,
    });

    // Criando a nova linha da tabela
    const table = document
      .getElementById("supermarketTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Adicionando as células na nova linha
    const idCell = newRow.insertCell(0);
    const produtoCell = newRow.insertCell(1);
    const quantidadeCell = newRow.insertCell(2);
    const categoriaCell = newRow.insertCell(3);
    const editCell = newRow.insertCell(4);
    const deleteCell = newRow.insertCell(5);

    // Inserindo os valores nas células
    idCell.textContent = id;
    produtoCell.textContent = produto;
    quantidadeCell.textContent = quantidade;
    categoriaCell.textContent = categoria;
    editCell.innerHTML = '<button>Editar</button>';
    deleteCell.innerHTML = '<button>Deletar</button>';

    // Limpando o formulário após adicionar a tarefa
    document.getElementById("supermarketForm").reset();

    console.log({ produtos });
  });

  // Buscar produto
  document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    const searchId = parseInt(document.getElementById("searchId").value); // Obtém o ID digitado pelo usuário
    const foundProduct = produtos.find(produto => produto.id === searchId); // Procura o produto na lista

    if (foundProduct) {
      // Se o produto for encontrado, mostra os detalhes dele
      document.getElementById("searchResult").textContent = 
        `Produto: ${foundProduct.produto}, Quantidade: ${foundProduct.quantidade}, Categoria: ${foundProduct.categoria}`;
    } else {
      // Se não encontrar, mostra uma mensagem de erro
      document.getElementById("searchResult").textContent = "Produto não encontrado!";
    }
  });