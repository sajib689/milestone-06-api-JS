
fetch('https://openapi.programming-hero.com/api/videos/category/1000')
.then(res => res.json())
.then(data => setUser(data))

console.log(user)