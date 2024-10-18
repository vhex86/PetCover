let isScrolling;
const elementsMyPage = document.querySelectorAll(".myPage");
const elements = Array.from(elementsMyPage);
let currentIndex = 0;
const arrowElement = document.querySelector(".myRedArrowForDownMotion");

document.addEventListener(
  "wheel",
  function (event) {
    // Сбрасываем таймер при каждом движении колесика
    event.preventDefault();
    clearTimeout(isScrolling);

    // Устанавливаем новый таймер
    isScrolling = setTimeout(function () {
      // Этот код сработает, когда прокрутка завершится
      if (event.deltaY > 0) {
        // Прокручиваем вниз
        if (currentIndex < elements.length - 1) {
          currentIndex++; // Увеличиваем индекс
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
        }
      }

      elements[currentIndex].scrollIntoView({
        behavior: "smooth",
      });
    }, 100); // Здесь 100 мс - это время ожидания до срабатывания таймера
  },
  { passive: false }
);

arrowElement.addEventListener("click", function () {  //слушатель на клик по стрелке
  let hasArrowTop = arrowElement.classList.contains("myRedArrowForTopMotion"); //проверяем куда установлена стрелка

  if (hasArrowTop) { // если стрелка стоит вверх
   
      currentIndex--; //если не первая секция уменьшаем индекс и двигаемся вверх
      if (currentIndex >= 0) {
      elements[currentIndex].scrollIntoView({
        behavior: "smooth"
      });
         }  else {
//если пришли в первую секцию поворачиваем стрелку и двигаемся ко второй секции
          arrowElement.classList.remove("myRedArrowForTopMotion");
          arrowElement.classList.add("myRedArrowForDownMotion");
          currentIndex += 2;
          // currentIndex++;
          elements[currentIndex].scrollIntoView({
            behavior: "smooth"
          });  
         }
      


    } 
    else {
//если стрелка смотрит вниз
      currentIndex++; //листаем вниз до последней секции
      if( currentIndex <= elements.length - 1){
      elements[currentIndex].scrollIntoView({
        behavior: "smooth"
      });
       }
             else {
// в последней секции поворачиваем стрелку вверз и возвращаемся к предпоследней секции
          arrowElement.classList.remove("myRedArrowForDownMotion");
          arrowElement.classList.add("myRedArrowForTopMotion");
          currentIndex -= 2;
          elements[currentIndex].scrollIntoView({
            behavior: "smooth"
          });  


    }
      



    }
  } );
  