// let produtos = [];
// let counter = 0;

// const ordemAlfabetica = (elementosDoSelect) => { 
//   let elementos = Array.from(elementosDoSelect.options);
//   elementos.sort((a, b) => a.text.localeCompare(b.text));
//   elementosDoSelect.innerHTML = "";
//   elementos.forEach(item => elementosDoSelect.add(item));
// }

// const idsSequenciais = () => {
//   return counter++;
// }

// function deletar() {
//   var linha = document.getElementById('idProduto');
//   if(linha) {
//     linha.remove();
//   } else {
//     console.log("Produto não existente")
//   }
//   //deleteCell.addEventListener('click', function(deletar) {
//   //  deletar = console.log('Botão funcionando')
//   //})
// }

// const elementosDoSelect = document.getElementById('categoria');
// ordemAlfabetica(elementosDoSelect);

// // Adiciona um evento que fica ouvindo o submit do form
// // Ou seja assim que o form for enviado vai executar o código do callback
// document
//   .getElementById("supermarketForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita o recarregamento da página por causa do submit do form

//     // Obtendo os valores inseridos no formulário
//     let id = idsSequenciais();
//     const produto = document.getElementById("produto").value;
//     const quantidade = document.getElementById("quantidade").value;
//     const categoria = document.getElementById("categoria").value;

//     // adicionando os valores na lista de tarefas para printar no console
//     produtos.push({
//       id,
//       produto,
//       quantidade,
//       categoria,
//     });

//     // Criando a nova linha da tabela
//     const table = document
//       .getElementById("supermarketTable")
//       .getElementsByTagName("tbody")[0];
//     const newRow = table.insertRow();

//     // Adicionando as células na nova linha
//     const idCell = newRow.insertCell(0);
//     const produtoCell = newRow.insertCell(1);
//     const quantidadeCell = newRow.insertCell(2);
//     const categoriaCell = newRow.insertCell(3);
//     const editCell = newRow.insertCell(4);
//     const deleteCell = newRow.insertCell(5);

//     // Inserindo os valores nas células
//     idCell.textContent = id;
//     produtoCell.textContent = produto;
//     quantidadeCell.textContent = quantidade;
//     categoriaCell.textContent = categoria;
//     editCell.innerHTML = '<button>Editar</button>';
//     deleteCell.innerHTML = '<button onclick="deletar()">Deletar</button>';

//     // Limpando o formulário após adicionar a tarefa
//     document.getElementById("supermarketForm").reset();

//     console.log({ produtos });

//      // Atribuindo funcionalidade ao botão deletar
    
//   });



let produtos = [];
let counter = 0;

const ordemAlfabetica = (elementosDoSelect) => {
  let elementos = Array.from(elementosDoSelect.options);
  elementos.sort((a, b) => a.text.localeCompare(b.text));
  elementosDoSelect.innerHTML = "";
  elementos.forEach((item) => elementosDoSelect.add(item));
};

const idsSequenciais = () => {
  return counter++;
};

// Função para deletar o item da tabela e do array de produtos
function deletar(id) {
  // Encontrar a linha da tabela pelo ID
  const table = document.getElementById("supermarketTable").getElementsByTagName("tbody")[0];
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent == id) {
      table.deleteRow(i); // Remove a linha da tabela
      break;
    }
  }

  // Remove o item do array de produtos
  produtos = produtos.filter((produto) => produto.id !== id);
  console.log({ produtos }); // Exibe a lista de produtos atualizada
}

const elementosDoSelect = document.getElementById("categoria");
ordemAlfabetica(elementosDoSelect);

// Adiciona um evento que fica ouvindo o submit do form
document.getElementById("supermarketForm").addEventListener("submit", function (event) {
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
  const table = document.getElementById("supermarketTable").getElementsByTagName("tbody")[0];
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
  deleteCell.innerHTML = `<button onclick="deletar(${id})">Deletar</button>`;

  // Limpando o formulário após adicionar o produto
  document.getElementById("supermarketForm").reset();

  console.log({ produtos });
});