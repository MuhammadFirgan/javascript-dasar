var arr = ["Firgan", 1, true];
for (var i = 0; i < arr.length; i++) {
  //console.log(typeof(arr[i]));
}

//join
console.log(arr.join('_'));

//push
arr.push("Muhammad");
console.log(arr.join('_'));

//pop 
arr.pop();
console.log(arr.join('_'));

//unshift
arr.unshift("Muhammad");
console.log(arr.join('_'));

//shift 
arr.shift();
console.log(arr.join('_'));

//splice
//splice(indexKeBerapa, mauDihapusBerapa, elementBaru);
arr.splice(1, 2, "Hello");
console.log(arr.join('_'));

//slice 
//slice(IndexAwal, IndexAkhir);
var arr2 = arr.slice(0,1);
console.log(arr2.join('_'));

//forEach
var angka = [1,3,2,4,6,7,8,9];
angka.forEach(function(e) {
  console.log(angka.join());
});

//map 
var angka2 = angka.map(function(e) {
  return e * 2;
});
console.log(angka2);

//sort 
var angka3 = [2,3,1,9,7,8,5];
angka3.sort();
console.log(angka3.join(' - '));

var angka4 = [0,10,6,4,3,7,20];
angka4.sort(function(a, b) {
  return a-b;
});
console.log(angka4.join(' - '));

//filter 
var angka5 = [0,10,6,4,3,7,20];
angka5.filter(function(e) {
  return e > 4;
});
console.log(angka5.join(' - '));

//find
var angka6 = [0,10,6,4,3,7,20];
angka6.find(function(e) {
  return e > 4;
});
console.log(angka6);
















