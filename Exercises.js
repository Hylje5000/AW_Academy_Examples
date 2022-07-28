// 1.

function CtoF(C) {
    return (C * 9 / 5) + 32;
}

function FtoC(F) {
    return (F - 32) * 5 / 9;
}

// 2.
function vokaalit(lause) {
    splitti = lause.split(" ");
    let counter = 0
    for(let i=0; i<splitti.length; i++){
        for(let x=0; x<splitti[i].length; x++){
            if(splitti[i][x] == "a" || splitti[i][x] == "e" || splitti[i][x] == "i" || splitti[i][x] == "o" || splitti[i][x] == "u"){
                counter++;
            }
        }
        
        }
        return counter;
    }
    


console.log(vokaalit("Kissa on kaunis"));

// 3.

function histogrammi(sana) {
    let histogrammi = {}
    sana = sana.toLowerCase()
    

    for(let i=0; i<sana.length; i++){
        if(histogrammi[sana[i]]!=undefined){
            histogrammi[sana[i]]++;
        }

        else{
            histogrammi[sana[i]] = 1;
        }
    }
    
    function printtaus(h) {
        for(let i in h){
            console.log(`${i}: ${'*'.repeat(h[i])}`);
        }
    }
    return printtaus(histogrammi)
}

console.log(histogrammi("saippuakauppias"));
console.log("\n")

// 4.

let sudoku = [ 
    [9, 0, 0, 0, 8, 0, 3, 0, 0], 
    [2, 0, 0, 2, 5, 0, 7, 0, 0], 
    [0, 2, 0, 3, 0, 0, 0, 0, 4], 
    [2, 9, 4, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 7, 3, 0, 5, 6, 0], 
    [7, 0, 5, 0, 6, 0, 4, 0, 0], 
    [0, 0, 7, 8, 0, 3, 9, 0, 0], 
    [0, 0, 1, 0, 0, 0, 0, 0, 3], 
    [3, 0, 0, 0, 0, 0, 0, 0, 2] 
   ];
 
function tarkista(sudoku, rivi) {
    let row = sudoku[rivi]
    let workarray = []
    let oikein = true;

    for(let i=0; i<row.length; i++){
        if(row[i]!=0){
            if(workarray.includes(row[i])){
                oikein = false;
            }
            else {
                workarray.push(row[i])
            }
        }

    }
    return oikein;
}   

console.log(tarkista(sudoku,0))
console.log(tarkista(sudoku,1))
console.log("\n")


// OSA 2

// 1.
let numerot = [1,2,3,4,5,6,7,8,9,10];

let vastaus = numerot
.filter(n => {return n%2===0})
.map(n => n*2)

console.log(vastaus)
console.log("\n")

// 2.

let kauppalista = {
    maito: 20,
    viinipullo: 10,
    kahvi: 15,
    karkki: 13,
}

function alennus(tuotteet) {
    Object.keys(tuotteet).map((key) => {
        tuotteet[key] = tuotteet[key] * 0.8;
    })
    for(let i in tuotteet){
        console.log(`${i}: ${tuotteet[i]}`)
    }
}
console.log(alennus(kauppalista))

// 3.

function isot(lause) {
    return lause
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ')
}

console.log(isot("kissa on kaunis"))

