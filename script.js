function showMenu(menuId, element){

  // sembunyikan semua content
  const contents = document.querySelectorAll('.content');
  contents.forEach(content=>{
    content.classList.remove('active-content');
  });

  // tampilkan content dipilih
  document.getElementById(menuId).classList.add('active-content');

  // hapus active menu
  const menus = document.querySelectorAll('.menu li');
  menus.forEach(menu=>{
    menu.classList.remove('active');
  });

  // active menu baru
  element.classList.add('active');
}
