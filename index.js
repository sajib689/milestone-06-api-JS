fetch('https://openapi.programming-hero.com/api/videos/categories')
  .then(res => res.json())
  .then(data => categories(data.data));

const categories = (categories) => {
    const categoriesButton = document.getElementById('button-group')
    
    categories.map(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn btn-active btn-ghost">${category.category}</button>

        `
        categoriesButton.appendChild(div)
    })

}