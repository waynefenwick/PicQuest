// src/components/tabs/FetchAnimals.js (create this file)
async function fetchAnimalPhotos() {
     try {
       const response = await fetch('/api/photos/animals'); // Adjust the API route for animals
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const data = await response.json();
       return data;
     } catch (error) {
       console.error('Error fetching animal photos:', error);
       return [];
     }
   }
   
   export default fetchAnimalPhotos;
   