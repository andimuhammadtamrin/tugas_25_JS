function deret(){
  var angka = [2,39,76,50,9,7,41,2,24,1,16];
  console.log("Sebelumnya :",angka);
  console.log("Ascending :",angka.sort());
  console.log("Descending :",angka.reverse());
  let angka1 = angka.filter(angka2=>{
    return angka2 > 10;
  })
  console.log("filter > 10: ",angka1);

}
deret()
