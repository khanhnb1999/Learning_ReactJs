const webTechs = [
     'HTML',
     'CSS',
     'JavaScript',
     'React',
     'Redux',
     'Node',
     'MongoDB',
];

// var getWebTechs = webTechs.indexOf("Sass");

// if(getWebTechs != -1) {
//      console.log("Sass là tiền xử lí Css");
// } else {
//      webTechs.push("Sass");
//      console.log(webTechs);
// }

function checkValue(element,arr) {
     var checkValue = arr.indexOf(element);
     return checkValue != -1 ? 
     "Sass là tiền xử lí Css" : arr.push(element);
}

// console.log(checkValue("Sass",webTechs));


