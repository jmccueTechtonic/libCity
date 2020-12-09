// ===> Toggle nav curtain
function burgerFunc(tag) {
  document.querySelector('.nav__nav-list').classList.toggle('visible');
  tag.classList.toggle('changeBurger');
}

// ===> Manage star rating

function ratingHandler(action) {
  document.querySelector('.formBook__rating').addEventListener(action, e => {
    const allStars = document.querySelectorAll('.formBook__star');
    const svg = e.target.parentElement;
    const starNumber = +(svg.id.split('star')[1]);

    // ===> adding a css class to the star upon hover
    if (action === 'mouseover') {
      allStars.forEach((el, i) => {
        if (i < starNumber) {
          el.classList.add('formBook__star--hover');
        }
      });
    }

    // ===> remove a css class to the star on mouseleave
    if (action === 'mouseleave') {
      allStars.forEach((el, i) => {
        if (i < 5) {
          el.classList.remove('formBook__star--hover');
        }
      });
    }

    // ===> add color to fill attribute to hovered element and all previous elements
    if (action === 'click') {
      const setRating = (num, color) => {
        allStars.forEach((el, i) => {
          if (i < num) {
            el.setAttribute('fill', color);
          }
        });
      }
      setRating(5, "rgb(223, 223, 223)"); // turn OFF all stars
      setRating(starNumber, 'yellow') // turn ON only clicked amount of stars
    }

  });
}

ratingHandler('mouseover'); // hover - adds class to target stars
ratingHandler('mouseleave'); // leave - removes class when leaving parent element
ratingHandler('click'); // click - alters fill attribute

