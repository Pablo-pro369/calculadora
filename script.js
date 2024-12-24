// Seleciona os elementos necessários
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// Variável para armazenar a entrada atual do usuário
let currentInput = "";

// Função para atualizar o display
function updateDisplay(value) {
    display.textContent = value || "0"; // Mostra "0" se o valor estiver vazio
}

// Adiciona eventos de clique a todos os botões
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === "=") {
            // Calcula o resultado ao clicar em "="
            try {
                currentInput = eval(currentInput); // Avalia a expressão matemática
                updateDisplay(currentInput);
            } catch (error) {
                updateDisplay("Erro"); // Mostra erro se a expressão for inválida
                currentInput = ""; // Reinicia a entrada
            }
        } else if (buttonValue === "C") {
            // Limpa o display ao clicar em "C"
            currentInput = "";
            updateDisplay(currentInput);
        } else {
            // Adiciona o valor do botão à entrada atual
            currentInput += buttonValue;
            updateDisplay(currentInput);
        }
    });
});

// Alternar entre os temas
const themeButton = document.getElementById("toggle-theme");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
