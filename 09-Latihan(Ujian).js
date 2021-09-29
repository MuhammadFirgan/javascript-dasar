var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for( var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log("Penumpang dengan nama " + namaPenumpang + " sudah naik");
        return penumpang;
      } else if( i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      } 
      
    }
  }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
  if(penumpang.length == 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    for(var j = 0; j < penumpang.length; j++) {
      if(penumpang[j] == namaPenumpang) {
        penumpang[j] = undefined;
        return penumpang;
      } else if (j == penumpang.length - 1) {
        console.log(namaPenumpang + " belum naik");
        return penumpang;
      }
    }
  }
}












