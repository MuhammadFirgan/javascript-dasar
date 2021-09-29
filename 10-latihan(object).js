//object literal
var mhs = {
  nama : "Firgan",
  nim : 210210024227,
  lulus : false,
  hobi : ["coding", "gaming"],
  alamat : {
    jalan : "Brigpol Sudarlan",
    kecamatan : "Bondowoso",
    propinsi : "Jawa Timur"
  },
  sapa : function() {
    return "Hi saya " + this.nama;
  }
}

//function deklaration
function objectMahasiswa(nama,nim,email,jurusan) {
  var mhs = {};
  mhs.nama = nama,
  mhs.nim = nim,
  mhs.email = email,
  mhs.jurusan = jurusan
  return mhs;
}

var mhs2 = objectMahasiswa("Ferdi",210210204225, "ferdi@yahoo.com", "Pendidikan Matematika");

//constructor 
function Mahasiswa(nama,nim,email,jurusan) {
  this.nama = nama,
  this.nim = nim,
  this.email = email,
  this.jurusan = jurusan
}

var mhs3 = new Mahasiswa("Adit", 210210204256, "adit@gmail.com", "Pendidikan Sejarah");


