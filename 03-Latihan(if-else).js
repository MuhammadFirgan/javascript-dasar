var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(var i = noAngkot; i <= jmlAngkot; i++ ) {
  if (i <= angkotBeroperasi) {
    console.log('Angkot no. ' + i + ' Beroperasi dengan baik');
  } else if (i === 8 || i === 10) {
    console.log('Angkot no. ' + i + ' Sedang lembur');
  } else {
    console.log('Angkot no. ' + i + ' Sedang tidak beroperasi'); 
  }
}