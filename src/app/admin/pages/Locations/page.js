'use client';
import { useEffect, useState } from 'react';
import FilterableTable from './FilterableTable';

const fetchLocations = async () => {
  try {
    const response = await fetch('/api/locations');
    const data = await response.json();
    console.log('Fetched locations:', data); // Debugging information
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fetchData = async (locationSlug = null) => {
    setIsLoading(true);
    const [fetchedLocations] = await Promise.all([fetchLocations()]);
    setLocations(fetchedLocations);
    setIsLoading(false);
  };

  const handleLocationClick = async (locationSlug) => {
    setSelectedLocation(locationSlug);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Locations:', locations); // Debugging information

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <>
          <FilterableTable
            fetchLocations={() => fetchData(selectedLocation)}
            locations={locations}
          />
        </>
      )}
    </div>
  );
};

export default LocationPage;
