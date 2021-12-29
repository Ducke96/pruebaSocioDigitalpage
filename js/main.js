var comidas = [];
var categorias = [];
async function fetchGetMeal(){

    const urlMeal = `https://www.themealdb.com/api/json/v1/1/random.php`
    const response = await fetch(urlMeal);
    const responseJSON =await response.json();
    console.log(responseJSON.meals[0]);
    comidas.push(responseJSON.meals[0]);
    return responseJSON.meals[0];
    
}

async function fetchGetCategorias(){

    const urlCategoria = `https://www.themealdb.com/api/json/v1/1/categories.php`
    const response = await fetch(urlCategoria);
    const responseJSON =await response.json();


    return responseJSON.categories;
    
}


async function fetchGetMealsByCategoria(categoria){

    const urlMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    const response = await fetch(urlMeals);
    const responseJSON =await response.json();


    return responseJSON.meals;
    
}


async function Comidas(){
    for(i = 0 ; i<=10 ; i++){
     await  fetchGetMeal();
    }
    console.log(comidas);
    agregarCard();
}


function agregarCard(){

    
    var tajetasComidas = document.getElementById("tajetas");
    var loader = document.getElementById("loader");

    loader.style.display='none';
    comidas.forEach(function(elemento, indice, array) {
        
    

        tajetasComidas.innerHTML += `
        <div class="col-md-4">
        <div class="food-item">
        <img class="food-image" src="${elemento.strMealThumb}">
        <h2>${elemento.strMeal}</h2>
        <p>
            id : ${elemento.idMeal} <br>
            Categoria : ${elemento.strCategory} <br>
            Area : ${elemento.strArea}
        </p>
        <form class="formStar" id="${indice}">
        <p class="clasificacion" >
          <input id="${elemento.strMeal}1" type="radio" name="estrellas" value="5"><!--
          --><label for="${elemento.strMeal}1">★</label><!--
          --><input id="${elemento.strMeal}2" type="radio" name="estrellas" value="4"><!--
          --><label for="${elemento.strMeal}2">★</label><!--
          --><input id="${elemento.strMeal}3" type="radio" name="estrellas" value="3"><!--
          --><label for="${elemento.strMeal}3">★</label><!--
          --><input id="${elemento.strMeal}4" type="radio" name="estrellas" value="2"><!--
          --><label for="${elemento.strMeal}4">★</label><!--
          --><input id="${elemento.strMeal}5" type="radio" name="estrellas" value="1"><!--
          --><label for="${elemento.strMeal}5">★</label>
        </p>
      </form>
        <a onclick="ventanaModal(${elemento.idMeal})" data-toggle="modal" data-target=".bd-example-modal-lg">View more</a>
        </div>
        </div>
        `

    });



}



async function agregarCategorias(){
   categorias= await fetchGetCategorias();
   console.log(categorias);
    var selectCategorias = document.getElementById("categoriasFilter");
    categorias.forEach(function(elemento, indice, array) {
        selectCategorias.innerHTML += `
        <a onclick="filtrarCategoria('${elemento.strCategory}')" class="dropdown-item">${elemento.strCategory}</a>
        `

    });

}

function ventanaModal(id){

    var modal = document.getElementById("contenidoModal");
    comidas.forEach(function(elemento, indice, array) {
        
    
        if(elemento.idMeal==id){

            modal.innerHTML = `

            <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">${elemento.strMeal}</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
        
            <div class="modal-body">
            <img class="food-image" src="${elemento.strMealThumb}">
            <h2 class="food-image font-weight-bold modaltittle">    Ingredient</h2> <br>
        <h3 class = "font-weight-light bodyModal">
         ${!elemento.strIngredient1 == "" ? elemento.strIngredient1 +"--->"+ elemento.strMeasure1 +"<br>": ""} 
         ${!elemento.strIngredient2 == "" ? elemento.strIngredient2 +"--->"+ elemento.strMeasure2 +"<br>": ""} 
         ${!elemento.strIngredient3 == "" ? elemento.strIngredient3 +"--->"+ elemento.strMeasure3 +"<br>": ""} 
         ${!elemento.strIngredient4 == "" ? elemento.strIngredient4 +"--->"+ elemento.strMeasure4 +"<br>": ""} 
         ${!elemento.strIngredient5 == "" ? elemento.strIngredient5 +"--->"+ elemento.strMeasure5 +"<br>": ""} 
         ${!elemento.strIngredient6 == "" ? elemento.strIngredient6 +"--->"+ elemento.strMeasure6 +"<br>": ""} 
         ${!elemento.strIngredient7 == "" ? elemento.strIngredient7 +"--->"+ elemento.strMeasure7 +"<br>": ""} 
         ${!elemento.strIngredient8 == "" ? elemento.strIngredient8 +"--->"+ elemento.strMeasure8 +"<br>": ""} 
         ${!elemento.strIngredient9 == "" ? elemento.strIngredient9 +"--->"+ elemento.strMeasure9 +"<br>": ""} 
         ${!elemento.strIngredient10 == "" ? elemento.strIngredient10 +"--->"+ elemento.strMeasure10 +"<br>": ""} 



        </h3>
        
        <h2 class="food-image font-weight-bold modaltittle">    instructions</h2> <br>
            

        <h5 class="bodyModal "> ${elemento.strInstructions}</h3>


          </div>
            `
        }



    });




}



async function filtrarCategoria(categoria){

    var tajetasComidas = document.getElementById("tajetas");
    tajetasComidas.innerHTML = '';

    var tajetasComidas = document.getElementById("tajetas");
    comidas.forEach(function(elemento, indice, array) {
        
        if(elemento.strCategory==categoria){

            tajetasComidas.innerHTML += `
            <div class="col-md-4">
            <div class="food-item">
            <img class="food-image" src="${elemento.strMealThumb}">
            <h2>${elemento.strMeal}</h2>
            <p>
                id : ${elemento.idMeal} <br>
                Categoria : ${elemento.strCategory} <br>
                Area : ${elemento.strArea}
            </p>
            <form class="formStar" id="${indice}">
            <p class="clasificacion" >
              <input id="${elemento.strMeal}1" type="radio" name="estrellas" value="5"><!--
              --><label for="${elemento.strMeal}1">★</label><!--
              --><input id="${elemento.strMeal}2" type="radio" name="estrellas" value="4"><!--
              --><label for="${elemento.strMeal}2">★</label><!--
              --><input id="${elemento.strMeal}3" type="radio" name="estrellas" value="3"><!--
              --><label for="${elemento.strMeal}3">★</label><!--
              --><input id="${elemento.strMeal}4" type="radio" name="estrellas" value="2"><!--
              --><label for="${elemento.strMeal}4">★</label><!--
              --><input id="${elemento.strMeal}5" type="radio" name="estrellas" value="1"><!--
              --><label for="${elemento.strMeal}5">★</label>
            </p>
          </form>
            <a onclick="ventanaModal(${elemento.idMeal})" data-toggle="modal" data-target=".bd-example-modal-lg">View more</a>
            </div>
            </div>
            `
        }

        

    });


}


function EsconderAbout(click){

    var about = document.getElementById("about");

    var tajetasComidas = document.getElementById("tajetas");
    if(click){

        tajetasComidas.style.display='none';

        about.style.display='block';

    }else{

        about.style.display='none';
        tajetasComidas.style.display='block';
    }

}
Comidas();
agregarCategorias();
