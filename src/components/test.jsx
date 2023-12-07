

function testerAPI() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erreur lors de la récupération des données', error));
  }
  
  testerAPI();
  