// const elementsMyPage = document.querySelectorAll(".myPage");
// const elements = Array.from(elementsMyPage);
// let currentIndex = 0; // Переменная для отслеживания текущего индекса



// document.addEventListener("wheel", function (event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение прокрутки


//     // Проверяем направление прокрутки
//     if (event.deltaY > 0 ) {
//         // Прокручиваем вниз
//         if (currentIndex < elements.length - 1) {
//             currentIndex++; // Увеличиваем индекс
           
        

//         }
//     } else {
//         // Прокручиваем вверх
//         if (currentIndex > 0) {
//             currentIndex--; // Уменьшаем индекс
//         }
//     }
//     elements[currentIndex].scrollIntoView({ 
//         behavior: 'smooth' 
//     });

// }, { passive: false });
let isScrolling;
const elementsMyPage = document.querySelectorAll(".myPage");
const elements = Array.from(elementsMyPage);
let currentIndex = 0;

document.addEventListener('wheel', function(event) {
    // Сбрасываем таймер при каждом движении колесика
    event.preventDefault();
    clearTimeout(isScrolling);

    // Устанавливаем новый таймер
    isScrolling = setTimeout(function() {
        // Этот код сработает, когда прокрутка завершится
        if (event.deltaY > 0 ) {
                     // Прокручиваем вниз
                     if (currentIndex < elements.length - 1) {
                         currentIndex++; // Увеличиваем индекс
                       
                        elements[currentIndex].scrollIntoView({ 
                               behavior: 'smooth' 
                                  });

            
                   }}


        console.log('Прокрутка завершена!');




    }, 100); // Здесь 100 мс - это время ожидания до срабатывания таймера
}, { passive: false });
