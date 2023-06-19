const ul = document.querySelector('ul')

fetch('data.json').then(res => {
  res.json().then(data => {
    data.map(el => {
      ul.innerHTML += `
        <li class='data'>
          <div>
            <img src='./assets/images/icon-${el.category.toLowerCase()}.svg' alt='${el.category}'/>
            <p class='${el.category.toLowerCase()}'>${el.category}</p>
          </div>
          <div>
            <p class='pointing'>${el.score}</p> 
            <p>/</p>
            <p>100</p>
          </div>
        </li>
      `
    })
  })
}). catch(e => console.log(e))