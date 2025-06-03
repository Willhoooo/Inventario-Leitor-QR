const infoDiv = document.getElementById("info");
const scanBtn = document.getElementById("scan-again");
const html5QrCode = new Html5Qrcode("reader");

function formatPC(data) {
  return `
Nome: ${data.nome}
Processador: ${data.processador}
RAM: ${data.ram}
Armazenamento: ${data.armazenamento}
  `;
}

function formatMesa(data) {
  return `
Usuário: ${data.usuario}
===============================
Modelo do Computador: ${data.computador}
Patrimônio: ${data.patrimonio_pc}
================================
Modelo do Monitor: ${data.monitor}
Patrimônio: ${data.patrimonio_mon}
================================
Modelo do Telefone: ${data.telefone}
Patrimônio: ${data.patrimonio_tel}
  `;
}

function mostrarInformacoes(decodedText) {
  infoDiv.textContent = "Buscando informações...";
  infoDiv.style.color = "black";

  fetch('specs.json')
    .then(res => res.json())
    .then(data => {
      const item = data[decodedText];
      if (!item) {
        infoDiv.textContent = "ID não encontrado no specs.json.";
        infoDiv.style.color = "red";
        return;
      }

      if (item.nome) {
        infoDiv.textContent = formatPC(item);
        infoDiv.style.color = "green";
      } else if (item.usuario) {
        infoDiv.textContent = formatMesa(item);
        infoDiv.style.color = "blue";
      } else {
        infoDiv.textContent = "Formato de dados desconhecido.";
        infoDiv.style.color = "orange";
      }

      scanBtn.style.display = "inline-block";
    })
    .catch(err => {
      infoDiv.textContent = "Erro ao carregar specs.json: " + err;
      infoDiv.style.color = "red";
    });
}

function iniciarScanner() {
  infoDiv.textContent = "Aguardando leitura...";
  infoDiv.style.color = "black";
  scanBtn.style.display = "none";

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      html5QrCode.stop();
      mostrarInformacoes(decodedText.trim());
    },
    (errorMessage) => {
      // Ignorar erros de leitura
    }
  ).catch(err => {
    infoDiv.textContent = "Erro ao iniciar câmera: " + err;
    infoDiv.style.color = "red";
  });
}

scanBtn.addEventListener("click", iniciarScanner);

// Inicia automaticamente
iniciarScanner();
