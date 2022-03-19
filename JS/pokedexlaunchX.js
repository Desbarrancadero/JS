
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Imagenes/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            console.log(data);
            let nombre = data.name;
            console.log(nombre);
            var element = document.getElementById("nombre");
            element.innerHTML = `${nombre}`;
    
            console.log(data);
            let tipo = data.types[0].type.name;
            console.log(tipo);
            var element = document.getElementById("tipo");
            element.innerHTML = `${tipo}`;
    
            console.log(data);
            let movimiento = data.moves[2].move.name;
            console.log(movimiento);
            var element = document.getElementById("movimiento");
            element.innerHTML = `${movimiento}`;
            
             let n=0;
             while (n <5){
                 n ++;
                 console.log(data);
                 let estadisticanombre = data.stats[`${n}`].stat.name;
                 console.log(estadisticanombre);
                 var element = document.getElementById(`stadisticanombre${n}`);
                 element.innerHTML = `${estadisticanombre}`;

             }
             let n2=0;
             while (n2 <5){
                 n2 ++;
                 console.log(data);
                 let estadisticanumero = data.stats[`${n2}`].base_stat;
                 console.log(estadisticanumero);
                 var element2 = document.getElementById(`stadisticanumero${n2}`);
                 element2.innerHTML = `${estadisticanumero}`;

             }



}

        
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

//console.log("\n************* For **************\n");
//console.log(data);
//for (numeroFor = 0 ; numeroFor <=5; numeroFor = numeroFor + 1) {
//  let estadisticanombre = data.stats[`${numeroFor}`].stat.name;
  //console.log(estadisticanombre);
//  var element = document.getElementById(`${numeroFor}`);
//  element.innerHTML = `${estadisticanombre}`;
//}
//console.log("Aquí salimos del for " + numeroFor);


//for (numeroEstadisticas = 0; 
   // numeroEstadisticas < 5; 
  //  numeroEstadisticas = numeroEstadisticas +1){

   // console.log(data);
  //  let estadisticanombre = data.stats[`${numeroEstadisticas}`].stat.name;
   // console.log(estadisticanombre);
  //  var element = document.getElementById("estadisticaNombre1");
  //  element.innerHTML = `${estadisticanombre}`;
 //  var element2 = document.getElementById("estadisticaNombre2");
 //   element2.innerHTML = `${estadisticanombre}`;
//}