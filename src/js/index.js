import { fetchCatByBreed } from './cat-api';
import { renderBreedDesc } from './renderBreedDesc';
import { fetchAndRenderBreeds } from './fetchAndRenderBreeds';

import Notiflix from 'notiflix';

//Отримуєм посилання на елементи в HTML-структурі, використовуючи метод querySelector
const breedSelect = document.querySelector('.breed-select');
const divPictEl = document.querySelector('.cat-info-pict');
const divDescEl = document.querySelector('.cat-info-desc');
const loaderEl = document.querySelector('.loader');

breedSelect.addEventListener('change', onChangeSelect);

// Додаєм обробник події на елемент breedSelect за допомогою addEventListener. 
// Обробник події onChangeSelect буде викликаний при зміні значення вибраної опції.

fetchAndRenderBreeds();
// Викликаєм функцію. Це призводить до виконання коду, описаного у функції fetchAndRenderBreeds,
// яка включає в себе запит до API, обробку результатів та оновлення відповідних елементів інтерфейсу.

function onChangeSelect(event) {
  loaderEl.classList.remove('hidden');
  divPictEl.innerHTML = '';
  divDescEl.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  fetchCatByBreed(breedId)
    .then(breed => renderBreedDesc(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('hidden'));
}

// Функція onChangeSelect знімає клас 'hidden' з елемента loaderEl. Це використовується для показу
// анімації завантаження. Очищає вміст елементів divPictEl і divDescEl за допомогою властивості 
// innerHTML. Це дозволяє видалити попередній вміст цих елементів перед оновленням інформації.
// Отримуєм значення вибраної опції (породи кота) з події event за допомогою event.target.value. 
// Значення зберігається у змінній breedId. Виводимо значення breedId у консоль, щоб перевірити,
// чи правильно отримано ідентифікатор породи. Викликаєм функцію fetchCatByBreed(breedId), яка 
// виконує запит до API для отримання додаткової інформації про вибрану породу кота. 
// Після успішного отримання інформації про породу, викликається функція renderBreedDesc(breed), 
// якій передається результат запиту (інформація про породу). Ця функція відповідає за візуальне 
// відображення опису породи кота. Якщо виникає помилка при виконанні запиту або обробці 
// результату, виконується блок catch, який виводить помилку у консоль і відображає сповіщення 
// про помилку за допомогою бібліотеки Notiflix.Notify.failure().
// Незалежно від успішності або невдачі запиту, виконується блок finally, де застосовується 
// клас 'hidden' до loaderEl (приховує анімацію завантаження), щоб вказати завершення процесу завантаження.

export { breedSelect, divPictEl, divDescEl, loaderEl };
