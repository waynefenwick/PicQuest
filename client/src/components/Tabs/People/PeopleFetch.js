// src/components/tabs/peopleFetch.js
async function fetchPeoplePhotos() {
     try {
       const response = await fetch('/api/photos/people'); // Adjust the API route
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error('Error fetching people photos:', error);
          return [];
     }
}

export default fetchPeoplePhotos;
