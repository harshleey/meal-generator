// document.querySelector('button').addEventListener('click', pickMeal)

// function pickMeal(){
//   const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
//   // let list = document.querySelector('h2');

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {

//         // Object.entries(meals).forEach(item => {
//         //   // console.log(item[1])
//         //   if (item[0] === "strArea" ) {
//         //     // console.log(item[1])
//         //     document.querySelector('.details span').textContent = "Area: " + item[1]
//         //   }
//         //   if (item[0] === "strInstructions") {
//         //     document.querySelector('.details p').textContent = "Instructions: " + item[1]
//         //   }

//         //   if (item[0] === "strYoutube") {
//         //     document.querySelector('video').src = item[1]
//         //   }
//         // })
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       }); 
// }

const getMeal = document.getElementById("get_meal");
const  meals = document.getElementById('meals')

getMeal.addEventListener('click', () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        createMeal(data.meals[0])
        })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
});

// Get all the ingredients and push them into an array
const createMeal = (meal) => {
  // console.log(meal["strArea"])
  let ingredients = []
  for (let i = 0; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    }
    else {
      break;
    }
  }   
  console.log(ingredients)
}

// const createMeal = (meal) => {
// 	const ingredients = [];
// 	// Get all ingredients from the object. Up to 20
// 	for(let i=1; i<=20; i++) {
// 		if(meal[`strIngredient${i}`]) {
// 			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
// 		} else {
// 			// Stop if no more ingredients
// 			break;
// 		}
// 	}
	
// 	const newInnerHTML = `
// 		<div class="row">
// 			<div class="columns five">
// 				<img src="${meal.strMealThumb}" alt="Meal Image">
// 				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
// 				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
// 				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
// 				<h5>Ingredients:</h5>
// 				<ul>
// 					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
// 				</ul>
// 			</div>
// 			<div class="columns seven">
// 				<h4>${meal.strMeal}</h4>
// 				<p>${meal.strInstructions}</p>
// 			</div>
// 		</div>
// 		${meal.strYoutube ? `
// 		<div class="row">
// 			<h5>Video Recipe</h5>
// 			<div class="videoWrapper">
// 				<iframe width="420" height="315"
// 				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
// 				</iframe>
// 			</div>
// 		</div>` : ''}
// 	`;
	
// 	meal_container.innerHTML = newInnerHTML;
// }







// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });