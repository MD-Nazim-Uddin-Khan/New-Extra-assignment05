const searchBTN = document.getElementById('search-btn');
const foodDiv = document.getElementById('meal')

//matro anci//
const foodNewDiv = document.getElementById('foodDetail')

searchBTN.addEventListener('click', getMealList);

function getMealList() {
    let searchInputText = document.getElementById('search-input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                
                <div onclick="displayFoodDetail('${meal.idMeal}')">
                
                <img src="${meal.strMealThumb}">
                <h5 class="h5Name">${meal.strMeal}</h5>
                </div>                
                `
                });
            }
            else {
                html = "sorry, we didn't find your search ";
                foodDiv.classList.add('notFound');
            }
            foodDiv.innerHTML = html;
        })
}
const displayFoodDetail = detail => {
    // console.log(detail)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals))
    // .then(data => renderFoodInfo(data.meals[0]))
}

const renderFoodInfo = meal => {
    console.log(meal)
    meal = meal[0];
    let html =`
    <div> 
    <img src="${meal.strMealThumb}">
    <h2 class="h2margin">${meal.strMeal}</h2>
    <h5 class="h5margin">Ingredients</h5>
    <p>${meal.strMeasure1} :- ${meal.strIngredient1}</p>
    <p>${meal.strMeasure2} :- ${meal.strIngredient2}</p>
    <p>${meal.strMeasure3} :- ${meal.strIngredient3}</p>
    <p>${meal.strMeasure4} :- ${meal.strIngredient4}</p>
    <p>${meal.strMeasure5} :- ${meal.strIngredient5}</p>
    <p>${meal.strMeasure6} :- ${meal.strIngredient6}</p>
    </div> 
    `
    foodNewDiv.innerHTML = html;

}





//      const renderFoodInfo = meal => {
//     console.log(meal)
//     const foodNewDiv = document.getElementById('countryDetail')
//     foodNewDiv.innerHTML = `
//     <div>
//     <img src="${meal.strMealThumb}">
//     <h2>${meal.strMeal}</h2>
//     <h5>Ingredients</h5>
//     <p>${meal.strMeasure1} :- ${meal.strIngredient1}</p>
//     <p>${meal.strMeasure2} :- ${meal.strIngredient2}</p>
//     <p>${meal.strMeasure3} :- ${meal.strIngredient3}</p>
//     <p>${meal.strMeasure4} :- ${meal.strIngredient4}</p>
//     <p>${meal.strMeasure5} :- ${meal.strIngredient5}</p>
//     <p>${meal.strMeasure6} :- ${meal.strIngredient6}</p>
//     </div> 
//     `
// }






        // .then(data => {
        //     let html = "";
        //     if (data.meals) {
        //         data.meals.forEach(meal => {
        //             html += `
        //         <section class="bottom" data-id ="${meal.idMeal}">
        //         <div>
        //         <img class="rounded-top" src="${meal.strMealThumb}">
        //         <h5 class=" h5Name ">${meal.strMeal}</h5>
        //         </div>
        //          </section>
        //         `
        //     })
        // }
    // })
    // mealList.innerHTML = html ;



    //touch korley eta dekhabey//

    // const renderFoodInfo = meal => {
    //     console.log(meal)
    //     const foodNewDiv = document.getElementById('countryDetail')
    //     foodNewDiv.innerHTML = `
    //     <div>
    //     <img src="${meal.strMealThumb}">
    //     <h2>${meal.strMeal}</h2>
    //     <h5>Ingredients</h5>
    //     <p>${meal.strMeasure1} :- ${meal.strIngredient1}</p>
    //     <p>${meal.strMeasure2} :- ${meal.strIngredient2}</p>
    //     <p>${meal.strMeasure3} :- ${meal.strIngredient3}</p>
    //     <p>${meal.strMeasure4} :- ${meal.strIngredient4}</p>
    //     <p>${meal.strMeasure5} :- ${meal.strIngredient5}</p>
    //     <p>${meal.strMeasure6} :- ${meal.strIngredient6}</p>
    //     </div> 
    //     `
    // }
    
    
    


// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
//     .then(res => res.json())
//     .then(data => cookingInfo(data.meals))

// const cookingInfo = cooking => {
//     const cookingDiv = document.getElementById('food')

//     cooking.forEach(element => {

//         foodDiv = document.createElement('div')

//         foodInfo = `
//         <section class="bottom">
//         <div>
//         <img class="rounded-top" src="${element.strMealThumb}">
//         <h5 class=" h5Name ">${element.strMeal}</h5>
//         </div>
//         </section>
//         `

//         foodDiv.innerHTML = foodInfo;
//         cookingDiv.appendChild(foodDiv)
//     });
// }

