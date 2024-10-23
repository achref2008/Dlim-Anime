// Anime List Array with Wikipedia Links
const animeList = [
    {
      name: 'Attack on Titan',
      url: 'https://en.wikipedia.org/wiki/Attack_on_Titan'
    },
    {
      name: 'Your Name',
      url: 'https://en.wikipedia.org/wiki/Your_Name'
    }
  ];
  
  // Function to populate Anime List with Links
  function populateAnimeList() {
    const list = document.getElementById('anime-list-items');
    animeList.forEach(anime => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = anime.url;
      link.textContent = anime.name;
      link.target = '_blank';  // Open in a new tab
      li.appendChild(link);
      list.appendChild(li);
    });
  }
  
  // Contact Form Submission Fix
  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (name && message) {
      alert(`Thank you, ${name}, for your message: "${message}"`);
    } else {
      alert('Please fill out both your name and message.');
    }
  });
  
  // Populate Anime List on page load
  document.addEventListener('DOMContentLoaded', populateAnimeList);
  