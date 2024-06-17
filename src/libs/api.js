import axios from "axios";

export async function getDestinationResponse(resource, query = "") {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_KEY}/${resource}${
        query ? "?" + query : ""
      }`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return { status: "fail", message: error.message };
  }
}

export async function bookmarkDestination(destId, token) {
  const response = await fetch(
    `${
      import.meta.env.VITE_REACT_APP_API_KEY
    }/destinations/${destId}/bookmarks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function unbookmarkDestination(destId, token) {
  const response = await fetch(
    `${
      import.meta.env.VITE_REACT_APP_API_KEY
    }/destinations/${destId}/unbookmarked`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getBookmarkedDestinations(token) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_KEY}/destinations/bookmarks`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function addRating(destId, rating, token) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_KEY}/destinations/${destId}/ratings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ rating }),
    }
  );
  const data = await response.json();
  return data;
}
