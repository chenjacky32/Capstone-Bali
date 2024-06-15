import React, { useEffect, useState } from "react";
import DestinationList from "../components/DestinationList";
import { getDestinationResponse } from "../libs/api";
import Header from "../components/Header";

export default function DestinationPage() {
  const [listDestination, setListDestination] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getDestinationResponse("destinations");
      if (response.status === "success") {
        setListDestination(response.data.destinations); // Adjust to the current response structure
      } else {
        console.error("Failed to fetch destinations:", response.message);
      }
    }

    fetchData();
  }, []);

  if (!listDestination) {
    return <div>Loading...</div>; // or your loading state
  }

  return (
    <>
      {/* Destination list */}
      <section>
        <Header
          title="Destinations"
          linkTitle="See All Destinations"
          linkHref="/destinations"
        />
        <DestinationList api={listDestination} />
      </section>
    </>
  );
}
