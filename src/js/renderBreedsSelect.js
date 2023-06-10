import { breedSelect } from './index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const renderBreedsSelect = breeds => {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  //Ініціалізація бібліотеки 'slim-select' на сгенерований select
  new SlimSelect({
    select: '#single',
  });
};
// Функція renderBreedsSelect створює випадаючий список порід тварин на основі наданого масиву 
// breeds і ініціалізує його з використанням бібліотеки 'slim-select'. Більш детально,
// віщезазначена функція приймає масив breeds як аргумент. Цей масив містить об'єкти, які 
// представляють породи тварин. Створює розмітку HTML для випадаючого списку (select) з варіантами
// порід тварин. Для кожного об'єкта породи у масиві breeds, функція створює опцію (<option>) 
// зі значенням value, яке представляє reference_image_id породи, і текстом опції, який відображає
// name породи. Зліплює всі створені опції у рядок за допомогою методу join(''), щоб отримати 
// остаточну розмітку списку. Вставляє отриманий рядок розмітки (markup) в елемент з ідентифікатором
// breedSelect. Ініціалізує бібліотеку 'slim-select' на випадаючому списку з ідентифікатором 
// #single. Це означає, що на випадаючий список буде застосовано функціональність, надана 
// бібліотекою 'slim-select'.


export { renderBreedsSelect };
