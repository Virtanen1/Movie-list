const dataConst = document.querySelector(".data")



fetch('/api/movies')
  .then((response) => response.json())
  .then((data) => toHTML(data));



function toHTML(json) {
    json.forEach((e) => {
        dataConst.innerHTML += `
        <tr>
       
        <td>${e.title} </td> 
        <td>${e.age} </td>
        <td>${e.genres} </td>
        <td>${e.releaseDate} </td>
        <td>${e.rating} </td>
        </tr>
        `
    })
}
