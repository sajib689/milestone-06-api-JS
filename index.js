let shortByViews = false;
const sortBtn = document.getElementById('sort-btn');

sortBtn.addEventListener('click', () => {
  shortByViews = true;
  handleLoadVideo(1000)
})
fetch("https://openapi.programming-hero.com/api/videos/categories")
  .then((res) => res.json())
  .then((data) => categories(data.data));

const categories = (categories) => {
  const categoriesButton = document.getElementById("button-group");

  categories.map((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button id='btn-bg' onClick="handleLoadVideo('${category.category_id}',this)" class="btn bg-ghost">${category.category}</button>

        `;
    categoriesButton.appendChild(div);
    
    
  });
};

const handleLoadVideo = (id,button,shortByViews) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.textContent = ''
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then( data => {
      // console.log(data.data);
      const noData = document.getElementById('no-data-message')
      if(data.data.length === 0) {
        noData.classList.remove('hidden')
      } else {
        noData.classList.add('hidden')
      }
      
      data.data.map( (video) => {
        const div = document.createElement("div");
        let verifiedIcon = ''
        if(video.authors[0].verified === true){
           verifiedIcon = `<img src='./images/fi_10629607.png'/>`
        }
       if(shortByViews){
        video.sort((a, b) =>{
          const totalViewsFirst = a.others?.views
          const totalViewsSecond = b.others?.views
          const totalViewsFirstNumber = parseFloat(totalViewsFirst.replace('K', '')) || 0
          const totalViewsSecondNumber = parseFloat(totalViewsSecond.replace('K', '')) || 0
          return totalViewsSecondNumber - totalViewsFirstNumber

        })
       }
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
            <div class='flex'><p>${video.authors[0].profile_name} </p> ${verifiedIcon} </div>
            <p>${video.others.views}</p>
        </div>
    </div>
    
    </div>
        
        `;
        videoContainer.appendChild(div);
      
      })
    });

    
};

handleLoadVideo(1000,shortByViews)