import React, { useEffect, useState } from "react";
import DestinationList from "../components/DestinationList";
import { getDestinationResponse } from "../libs/api";
import Header from "../components/Header";

export default function DestinationPage() {
  const [listDestination, setListDestination] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getDestinationResponse("destinations");
      setListDestination(data);
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
