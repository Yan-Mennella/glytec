// Esconde e mostra a sidebar
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.querySelector('.main-content');

let isSidebarVisible = true;

closeBtn.addEventListener('click', () => {
    if (isSidebarVisible) {
        sidebar.style.left = '-380px';
        mainContent.style.marginLeft = '0';   // recua o conteúdo
        isSidebarVisible = false;
    } else {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '380px'; // volta espaço do menu
        isSidebarVisible = true;
    }    
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButtons = document.querySelectorAll(".dropbtn");

    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          // Fecha todos os outros abertos antes de abrir o clicado
          document.querySelectorAll(".dropdown-content").forEach((menu) => {
            if (menu !== btn.nextElementSibling) {
                menu.classList.remove("show");
            }
          });

          // Alterna o submenu do botão clicado
          btn.nextElementSibling.classList.toggle("show");
        });
    });

    // Fecha o menu se clicar fora
    window.addEventListener("click", (e) => {
        if (!e.target.matches(".dropbtn")) {
            document.querySelectorAll(".dropdown-content").forEach((menu) => {
                menu.classList.remove("show");
            });
        }
    });
});