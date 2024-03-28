


function generateStars(count=100){

sky.innerHTML =``
//let starsCount = 100;

//while(starsCount -- > 0){
// sky.innerHTML += `<div class="star"></div>`;}


for (starsCount = 1; starsCount < count; starsCount++) {
 sky.innerHTML += `<div class="star"
   style="
   --left:${Math.random() * 100}%; 
   --top:${Math.random() * 100}%; 
   --size:${Math.random() * 100}px; 
   --light-color:rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
                 Math.random() * 255
               });
 --dark-color:rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
                 Math.random() * 255
               });
   ">
   </div>`;

   if ((color = starColorInput.value)) {
     sky.innerHTML += `<div class="star"
   style="
   --left:${Math.random() * 100}%; 
   --top:${Math.random() * 100}%; 
   --size:${Math.random() * 100}px; 
   --light-color:${color};
      --dark-color:${color};
   ">
   </div>`;
   }

  }

};

function getCount() {
  let count = parseInt(starCountInput.value);
  generateStars(count);
}

function getColor() {
 color = starColorInput.value;
      
      
   
    }


   