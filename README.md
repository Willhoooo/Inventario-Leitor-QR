Este projeto é uma aplicação web simples que permite escanear QR Codes usando a câmera do dispositivo e consultar informações de computadores e mesas com base em um arquivo specs.json.

Funcionalidades:
-Leitura de QR Codes com a câmera do dispositivo.
-Busca automática de informações no arquivo specs.json.
-Exibição de dados detalhados de computadores (nome, processador, RAM, armazenamento).
-Exibição de informações de mesas (modelo e patrimônio de computador, monitor e telefone).
-Interface responsiva e simples de usar.

Estrutura:
/
├── index.html          # Página principal com leitor de QR e lógica de busca
├── specs.json          # Arquivo com os dados dos equipamentos
├── style.css           # Estilos visuais da página

Como usar:
1. Prepare os QR Codes com textos que correspondam às chaves definidas no specs.json, como:
-computador01
-mesa_do_william

2. Abra o index.html em um navegador moderno (Chrome, Firefox, etc.).

3. Permita o acesso à câmera do dispositivo.

4. Escaneie o QR Code. A aplicação:

5. Para a câmera após a leitura.

6. Busca a chave no specs.json.

7. Exibe as informações no painel abaixo do leitor.

Observações:
-O QR Code deve conter exatamente o nome da chave no specs.json.
-Caso a chave não seja encontrada, uma mensagem de erro será exibida.
-A leitura para automaticamente após o primeiro QR escaneado.

Tecnologias Utilizadas:
-HTML5
-JavaScript (Fetch API)
-html5-qrcode – biblioteca de leitura de QR Codes via navegador
-CSS para layout básico
