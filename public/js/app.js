fetch('http://localhost:3001/car_list')
  .then(response => response.json())
  .then(data => {
    const carList = document.querySelector('.car-list');

    data.forEach(car => {
      const carItem = document.createElement('li');
      carItem.innerHTML = `${car.title}`;
      carList.appendChild(carItem);
    });
  });