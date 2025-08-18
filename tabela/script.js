// script.js
function salvarTabela() {
  const tabela = document.getElementById("editableTable");
  const dados = [];

  for (let i = 1; i < tabela.rows.length; i++) {
    const linha = tabela.rows[i];
    const linhaDados = [];
    for (let j = 0; j < linha.cells.length; j++) {
      linhaDados.push(linha.cells[j].innerText);
    }
    dados.push(linhaDados);
  }

  localStorage.setItem("tabelaDados", JSON.stringify(dados));
  alert("Tabela salva com sucesso!");
}

function carregarTabela() {
  const dadosSalvos = localStorage.getItem("tabelaDados");
  if (!dadosSalvos) {
    alert("Nenhum dado salvo encontrado.");
    return;
  }

  const tabela = document.getElementById("editableTable");
  const dados = JSON.parse(dadosSalvos);

  for (let i = 0; i < dados.length; i++) {
    const linha = tabela.rows[i + 1]; // Ignora o cabeçalho
    for (let j = 0; j < dados[i].length; j++) {
      linha.cells[j].innerText = dados[i][j];
    }
  }

  alert("Tabela carregada com sucesso!");
}

function adicionarLinha() {
  const tabela = document.getElementById("editableTable").getElementsByTagName("tbody")[0];
  const novaLinha = tabela.insertRow();

  for (let i = 0; i < 3; i++) {
    const novaCelula = novaLinha.insertCell();
    novaCelula.contentEditable = "true";
    novaCelula.innerText = ""; // Começa vazia
  }
}

//

function salvarTabela() {
  const titulo = document.getElementById("tituloTabela").value.trim();
  if (!titulo) {
    alert("Por favor, insira um título para salvar a tabela.");
    return;
  }

  const tabela = document.getElementById("editableTable");
  const dados = [];

  for (let i = 1; i < tabela.rows.length; i++) {
    const linha = tabela.rows[i];
    const linhaDados = [];
    for (let j = 0; j < linha.cells.length; j++) {
      linhaDados.push(linha.cells[j].innerText);
    }
    dados.push(linhaDados);
  }

  localStorage.setItem(`tabela_${titulo}`, JSON.stringify(dados));
  alert(`Tabela "${titulo}" salva com sucesso!`);
}

//

function listarTabelasSalvas() {
  const lista = document.getElementById("listaTabelas");
  lista.innerHTML = '<option value="">Selecione uma tabela</option>';

  for (let chave in localStorage) {
    if (chave.startsWith("tabela_")) {
      const titulo = chave.replace("tabela_", "");
      const option = document.createElement("option");
      option.value = titulo;
      option.textContent = titulo;
      lista.appendChild(option);
    }
  }
}

function carregarTabelaSelecionada() {
  const titulo = document.getElementById("listaTabelas").value;
  if (!titulo) {
    alert("Selecione uma tabela para carregar.");
    return;
  }

  const dadosSalvos = localStorage.getItem(`tabela_${titulo}`);
  if (!dadosSalvos) {
    alert("Tabela não encontrada.");
    return;
  }

  const tabela = document.getElementById("editableTable");
  const dados = JSON.parse(dadosSalvos);

  // Limpa a tabela atual
  const tbody = tabela.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  // Recria as linhas
  dados.forEach(linhaDados => {
    const novaLinha = tbody.insertRow();
    linhaDados.forEach(celula => {
      const novaCelula = novaLinha.insertCell();
      novaCelula.contentEditable = "true";
      novaCelula.innerText = celula;
    });
  });

  alert(`Tabela "${titulo}" carregada com sucesso!`);
}

// Chama ao carregar a página
window.onload = listarTabelasSalvas;

//



function excluirTabela() {
  const titulo = document.getElementById("listaTabelas").value;
  if (!titulo) {
    alert("Selecione uma tabela para excluir.");
    return;
  }

  const confirmar = confirm(`Tem certeza que deseja excluir a tabela "${titulo}"?`);
  if (!confirmar) return;

  localStorage.removeItem(`tabela_${titulo}`);
  alert(`Tabela "${titulo}" excluída com sucesso!`);
  listarTabelasSalvas(); // Atualiza a lista
}

///


function excluirTabela() {
  const titulo = document.getElementById("listaTabelas").value;
  if (!titulo) {
    alert("Selecione uma tabela para excluir.");
    return;
  }

  const confirmar = confirm(`Tem certeza que deseja excluir a tabela "${titulo}"?`);
  if (!confirmar) return;

  localStorage.removeItem(`tabela_${titulo}`);
  alert(`Tabela "${titulo}" excluída com sucesso!`);
  listarTabelasSalvas(); // Atualiza a lista
}


///


function listarTabelasSalvas() {
  const lista = document.getElementById("listaTabelas");
  lista.innerHTML = '<option value="">Selecione uma tabela</option>';

  for (let chave in localStorage) {
    if (chave.startsWith("tabela_")) {
      const titulo = chave.replace("tabela_", "");
      const option = document.createElement("option");
      option.value = titulo;
      option.textContent = titulo;
      lista.appendChild(option);
    }
  }
}