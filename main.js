const searchbox = document.querySelector('#searchbox')
const search = document.querySelector('#search')
const songs = document.querySelector('.songs')

let searchinput

search.addEventListener('click', () => {
  searchinput = searchbox.value
  const options = {
    method: 'GET',
    url: 'https://youtube-music1.p.rapidapi.com/v2/search',
    params: { query: `${searchinput}` },
    headers: {
      'X-RapidAPI-Key': 'a888abdc7emsh14cd8c90defa482p145b51jsnb31b053e159e',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data.result.songs);
    songs.innerHTML = response.data.result.songs.map((object) => {
      return `<p>${object.name}</p>`
    })
  }).catch(function (error) {
    console.error(error);
  });
})

