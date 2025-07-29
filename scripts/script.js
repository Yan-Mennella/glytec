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