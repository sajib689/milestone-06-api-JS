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
        div.classList.add('card', 'card-compact','mt-20', 'w-[300px]', 'bg-base-100', 'shadow-xl');
        div.innerHTML = `
       
    <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
    <div class='mt-3'>
     
      <div class="flex justify-around items-center">
      <div class="avatar online placeholder">
      <div class="bg-neutral text-neutral-content rounded-full w-16">
      <img src="${video.authors[0].profile_picture}" />

      </div>
    </div>
      

        <div>
            <h1 class="card-title">${video.title}</h1>
            <p>${video.authors[0].profile_name}</p>
            <p>${video.others.views}</p>
        </div>
    </div>
    
    </div>
        
        `;
        videoContainer.appendChild(div);
      
      })
    });

    
};
