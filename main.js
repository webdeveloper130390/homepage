let partMovies = movies.slice(0,100)
letelMovList = document.querySelector('.movieses__list')


partMovies.forEach((item, index)=>{
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${item.Title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    elMovList.appendChild(newLi)
})