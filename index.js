let detik = 88;
let menit = Math.floor(detik/60)
let detik1 = detik -(60 * menit)

if(detik1.toString().length > 1){
    console.log(menit + ":" + detik1)
} else {
    console.log(menit + ":" + "0" + detik1)
}

