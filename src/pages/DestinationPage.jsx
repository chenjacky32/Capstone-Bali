// pages/DestinationPage.jsx
import React, { useEffect, useState } from "react";
import DestinationList from "../components/DestinationList";
import { getDestinationResponse } from "../libs/api";
import Header from "../components/Header";
import ToggleDisplayMode from "../components/ToggleDisplayMode";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DestinationPage() {
  const [listDestination, setListDestination] = useState(null);
  const [filteredDestinations, setFilteredDestinations] = useState(null);
  const [displayMode, setDisplayMode] = useState("grid"); // Default mode is grid
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getDestinationResponse("destinations");
      if (response.status === "success") {
        setListDestination(response.data.destinations);
        setFilteredDestinations(response.data.destinations); // Initialize with full list
      } else {
        console.error("Failed to fetch destinations:", response.message);
      }
      setTimeout(() => setLoading(false), 1000); // 0.5 second delay
    }

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredDestinations(listDestination);
    } else {
      const filtered = listDestination.filter(
        (destination) =>
          destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          destination.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* Header, Search Bar, and Mode Toggle */}
      <section>
        {/* <Header title="Destinations" /> */}
        <SearchBar onSearch={handleSearch} />
        <ToggleDisplayMode
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
        />
      </section>

      {/* Destination list */}
      <section>
        <DestinationList api={filteredDestinations} displayMode={displayMode} />
      </section>
    </>
  );
}
