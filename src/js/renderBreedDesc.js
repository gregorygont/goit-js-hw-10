import { divPictEl, divDescEl } from './index';


const renderBreedDesc = breed => {
  const markupPicture = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}">`;
  const markupDescript = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
  divPictEl.insertAdjacentHTML('beforeend', markupPicture);
  divDescEl.insertAdjacentHTML('beforeend', markupDescript);
};

// Ця функція створює розмітку для відображення зображення породи кота та інформації про неї 
// на основі переданого об'єкта breed. За допомогою рядка markupPicture формує розмітку для 
// відображення зображення породи кота. Використовує значення властивості url об'єкта breed 
// як джерело зображення та значення властивості id як альтернативний текст. За допомогою рядка 
// markupDescript формує розмітку для відображення заголовку, опису та темпераменту породи кота.
// Використовує значення властивостей name, description та temperament з об'єкта breed.breeds[0],
// який містить інформацію про породу кота. Вставляє створену розмітку для зображення породи кота
// в елемент divPictEl за допомогою методу insertAdjacentHTML з параметром 'beforeend'. 
// Це додає створений HTML-код в кінець вмісту елемента divPictEl. Вставляє створену розмітку 
// для опису породи кота в елемент divDescEl за допомогою методу insertAdjacentHTML 
// з параметром 'beforeend'. Це додає створений HTML-код в кінець вмісту елемента divDescEl.


export { renderBreedDesc };
