const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

//Унікальний ключ доступу до Cat API
const KEY =
  'live_iyDH1Lkp1C41sM6nOfMaVWMXh6fBqIhUHQaPx4vk9JAsMk5snpOH10h6mGBzWA9x';


const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// Функція fetchBreeds виконує запит до API TheCatAPI за списком порід котів. 
// Вона використовує fetch для виконання HTTP-запиту до URL ${url1}?api_key=${KEY}, 
// де ${url1} - це базова адреса API для отримання списку порід, а ${KEY} - ключ доступу API. 
// Якщо відповідь сервера не має статусу 200 (OK), функція викидає помилку зі статусом відповіді. 
// Якщо відповідь успішна, функція повертає результат у форматі JSON.


const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// Функція fetchCatByBreed приймає параметр breedId, що вказує ідентифікатор конкретної породи кота. 
// Вона виконує запит до API TheCatAPI за зображенням кота обраної породи. 
// Вона також використовує fetch для виконання HTTP-запиту до URL.

//Іменований експорт функцій
export { fetchBreeds, fetchCatByBreed };
