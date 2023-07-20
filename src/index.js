console.log('%c HI', 'color: firebrick')

window.onload = function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(response => response.json())
      .then(data => {
        let dogImgContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          let img = document.createElement('img');
          img.src = imageUrl;
          dogImgContainer.appendChild(img);
        });
      });
  }

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let dogBreedContainer = document.getElementById('dog-breeds');
    for(let breed in data.message){
      let li = document.createElement('li');
      li.innerHTML = breed;
      dogBreedContainer.appendChild(li);
    }
  });

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let dogBreedContainer = document.getElementById('dog-breeds');
    for(let breed in data.message){
      let li = document.createElement('li');
      li.innerHTML = breed;
      dogBreedContainer.appendChild(li);
    }
  });

  for(let breed in data.message){
    let li = document.createElement('li');
    li.innerHTML = breed;
    li.addEventListener('click', function() {
      this.style.color = 'red';
    });
    dogBreedContainer.appendChild(li);
  }
  