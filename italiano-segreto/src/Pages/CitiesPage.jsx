import { useState, useEffect } from 'react';
import React from 'react';

export default function CitiesPage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log('CitiesPage is mounted');
    fetch('/api/cities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCities(data))
      .catch(error => {
        console.error('Error fetching cities:', error.message); 
      }); 
  }, []);

  return (
    <div>
      <h1>Villes</h1>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <a href={`/cities/${city.id}`}>{city.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

