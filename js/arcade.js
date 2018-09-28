let figure= document.querySelector('.figure');
let total = []
let leftPart = [];
let temporaryArray = [];

for (let i = 0; i <  12; i++){
    for (let f = 0; f <  7; f++){
        let temporaryString = "";
        
        let onOrOff = Math.round(Math.random());
        if (onOrOff == 1) {
            temporaryString += '<div class="kleur"></div>'
        }
        else {
            temporaryString += '<div class="blanco"></div>'
        }
        leftPart.push(temporaryString);
    }
    temporaryArray = leftPart.slice(0, 6).reverse();
    leftPart += temporaryArray;
    total += leftPart.toString().replace(/,/g,'');
    total += '<br>';
    temporaryArray = [];
    leftPart = [];
}

figure.innerHTML = total;