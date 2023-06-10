import { loaderEl, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { renderBreedsSelect } from './renderBreedsSelect';


const fetchAndRenderBreeds = () => {
  loaderEl.classList.remove('hidden');
  fetchBreeds()
    .then(breeds => renderBreedsSelect(breeds))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
      breedSelect.classList.remove('hidden');
    });
};

// Функція fetchAndRenderBreeds видаляє клас 'hidden' з елемента loaderEl. Це використовується для показу анімації 
// завантаження/індікатора процесу. Викликає функцію fetchBreeds(), яка виконує запит до API 
// для отримання списку порід котів. Після успішного отримання списку порід, викликається функція
// renderBreedsSelect(breeds), якій передається результат запиту (список порід). Ця функція 
// відповідає за візуальне відображення списку порід - створення випадаючого списку. 
// Якщо виникає помилка при виконанні запиту або обробці результату, виконується блок catch, 
// який виводить помилку у консоль і відображає сповіщення про помилку за допомогою бібліотеки 
// Notiflix.Notify.failure(). Незалежно від успішності або невдачі запиту, виконується блок 
// finally, де знову застосовується клас 'hidden' до loaderEl (приховує анімацію завантаження) 
// та видаляється клас 'hidden' з breedSelect показує елементи інтерфейсу, пов'язані з вибором породи кота.
// Отже, ця функція виконує запит до API для отримання списку порід котів, показує анімацію 
// завантаження під час отримання даних, відображає отримані дані у візуальному елементі 
// інтерфейсу, а також обробляє помилки, якщо вони виникають. Після завершення всіх операцій, 
// вона також приховує анімацію завантаження і показує відповідні елементи інтерфейсу.

export { fetchAndRenderBreeds };
