(async function load(){
  async function getData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
  const comedyList = await getData('https://yts.mx/api/v2/list_movies.json?genre=comedy')
  const fantasyList = await getData('https://yts.mx/api/v2/list_movies.json?genre=fantasy')
  const romanceList = await getData('https://yts.mx/api/v2/list_movies.json?genre=romance')
  console.log(actionList, dramaList, animationList, comedyList, fantasyList, romanceList)
  function videoItemTemplate(movie){
    return(
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">${movie.title}</h4>
       </div>`
    )
  }
  function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function renderMovieList(list, $container){
    //actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement);
    })
  }
  
  const $actionContainer = document.querySelector('#action')
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation')
  renderMovieList(animationList.data.movies, $animationContainer)

  const $comedyContainer = document.getElementById('comedy')
  renderMovieList(comedyList.data.movies, $comedyContainer)
  
  const $fantasyContainer = document.getElementById('fantasy')
  renderMovieList(fantasyList.data.movies, $fantasyContainer)
  
  const $romanceContainer = document.getElementById('romance')
  renderMovieList(romanceList.data.movies, $romanceContainer)



  const $featuringContainer = document.getElementById('#featuring')
  const $form = document.getElementById('#form')
  const $home = document.getElementById('#home')


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');



  })()