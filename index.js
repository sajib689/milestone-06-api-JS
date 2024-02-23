fetch('https://openapi.programming-hero.com/api/videos/category/1000')
  .then(res => res.json())
  .then(data => myFunction(data.data));

const myFunction = (data) => {
  data.map(singleData => {
    const container = document.getElementById('container');
    const createData = document.createElement('div'); // Fix the typo here

    createData.innerHTML = `
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="${singleData.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${singleData.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(createData);
  });
};
