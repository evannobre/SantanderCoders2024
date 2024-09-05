let tasks = [];

const ordemAlfabetica = (elementosDoSelect) => { 
  let elementos = Array.from(elementosDoSelect.options);
  elementos.sort((a, b) => a.text.localeCompare(b.text));
  elementosDoSelect.innerHTML = "";
  elementos.forEach(item => elementosDoSelect.add(item));
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
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const categoria = document.getElementById("categoria").value;

    // adicionando os valores na lista de tarefas para printar no console
    tasks.push({
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
    const produtoCell = newRow.insertCell(0);
    const quantidadeCell = newRow.insertCell(1);
    const categoriaCell = newRow.insertCell(2);
    const editCell = newRow.insertCell(3);
    const deleteCell = newRow.insertCell(4);

    // Inserindo os valores nas células
    produtoCell.textContent = produto;
    quantidadeCell.textContent = quantidade;
    categoriaCell.textContent = categoria;
    editCell.innerHTML = '<button>Editar</button>';
    deleteCell.innerHTML = '<button>Deletar</button>';

    // Limpando o formulário após adicionar a tarefa
    document.getElementById("supermarketForm").reset();

    console.log({ tasks });
  });
