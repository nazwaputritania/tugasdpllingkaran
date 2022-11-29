var lingkaran = require('readline-sync');
var phi1 = 22/7
var phi2 = 3.14
var r = lingkaran.questionInt('masukan jari-jari = ');
if (r%7 == 0) {
    console.log('luas lingkaran adalah = ' + phi1 * r * r);
}else{
    console.log('luas lingkaran adalah = ' + phi2 * r * r);
}