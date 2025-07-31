const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

let isSidebarVisible = true;

closeBtn.addEventListener('click', () => {
    if (isSidebarVisible) {
        sidebar.style.left = '-380px';
        isSidebarVisible = false;
    } else {
        sidebar.style.left = '0';
        isSidebarVisible = true;
    }    
});

/*

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu a');
  const options = ['1', '2', '3', '4'];

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      removeSubmenus(); // remove qualquer outro submenu

      const submenu = document.createElement('div');
      submenu.classList.add('submenu');

      options.forEach(option => {
        const link = document.createElement('a');
        link.textContent = Opção ${option};
        link.href = ${item.textContent.toLowerCase()}/opcao${option}.html; // Exemplo de link dinâmico
        submenu.appendChild(link);
      });

      item.appendChild(submenu);
    });

    item.addEventListener('mouseleave', () => {
      setTimeout(removeSubmenus, 100); // Delay para evitar remoção imediata
    });
  });

  function removeSubmenus() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(menu => menu.remove());
  }
});

*/