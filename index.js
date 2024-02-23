fetch('https://openapi.programming-hero.com/api/videos/categories')
  .then(res => res.json())
  .then(data => categories(data.data));

const categories = (categories) => {
    
}