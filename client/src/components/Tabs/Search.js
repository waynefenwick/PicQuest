import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNSPLASH_IMAGES } from '../../utils/queries';

function Search({ searchQuery, isLoggedIn, handleFavorite }) {
  const { loading, error, data } = useQuery(QUERY_UNSPLASH_IMAGES, {
    variables: { category: searchQuery },
    skip: !searchQuery,
  });

  const handleDownload = (imageUrl, altDescription) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank'; // Open in a new tab
    link.rel = 'noopener noreferrer';
    link.download = altDescription || 'image';
    link.click();
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const unsplashImages = data ? data.unsplashImages : [];

  return (
    <section id="tab2" className="section">
      <h2>{searchQuery && `Search Results for "${searchQuery}"`}</h2>
      <div className="image-list">
  {unsplashImages.map((image, index) => (
    <div key={`${image.unsplashId}-${index}`} className="image-card">
      {image.imageUrl && (
        <div>
          <a href={image.imageUrl} download={image.alt_description || 'image'} target="_blank">
            <img src={image.imageUrl} alt={image.alt_description} />
          </a>
          <p className="image-description">{image.description}</p>
          <button className="favorites-button" onClick={() => handleFavorite(image.id)}>Favorite</button>
        </div>
      )}
    </div>
  ))}
</div>
    </section>
  );
}

export default Search;
    