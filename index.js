fetch("https://openapi.programming-hero.com/api/videos/categories")
  .then((res) => res.json())
  .then((data) => categories(data.data));

const categories = (categories) => {
  const categoriesButton = document.getElementById("button-group");

  categories.map((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button onClick="handleLoadVideo('${category.category_id}')" class="btn btn-active btn-ghost">${category.category}</button>

        `;
    categoriesButton.appendChild(div);
  });
};

const handleLoadVideo = (id) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.textContent = ''
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then( data => {
      console.log(data.data);
      data.data.map( (video) => {
        console.log(video);
        
        
        const div = document.createElement("div");
        div.classList.add('card', 'card-compact','mt-20', 'w-[250px]', 'bg-base-100', 'shadow-xl');
        div.innerHTML = `
       
    <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    
    </div>
        
        `;
        videoContainer.appendChild(div);
      
      })
    });

    
};
const displayVideo = (data) => {
  
}