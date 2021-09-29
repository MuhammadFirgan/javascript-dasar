var menu = prompt("Masukkan nama makanan : \n ex: nasi, sayur, susu, mie, softdrink");

switch (menu) {
  case 'nasi':
    alert("Makanan / minuman Sehat");
    break;
  case 'sayur':
    alert("Makanan / minuman Sehat");
    break;
  case 'susu':
    alert("Makanan / minuman Sehat");
    break;
  case 'mie':
    alert("Makanan / minuman tidak sehat");
    break;
  case 'softdrink':
    alert("Makanan / minuman tidak sehat");
    break
  default:
    alert("Makanan / minuman salah");
    break;
}