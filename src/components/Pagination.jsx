import { useState } from "react";

export default function Pagination({ page, lastPage, setPage }) {
  const [inputPage, setInputPage] = useState("");

  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    scrollTop();
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber >= 1 && pageNumber <= lastPage) {
      setPage(pageNumber);
      setInputPage("");
      scrollTop();
    } else {
      // Handle invalid page number
      alert(`Halaman harus diantara 1 hingga ${lastPage}`);
    }
  };

  const handleKeyDown = (e) => {
    // Prevent entering negative sign (-)
    if (e.key === "-" || e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-2xl text-color-primary">
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 transition-all border rounded hover:bg-color-orange hover:text-white border-color-primary"
        >
          Prev
        </button>
      )}

      <input
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Prevent entering negative sign
        className="px-4 py-2 border rounded border-color-primary"
        placeholder={`Page 1 - ${lastPage}`}
      />
      <button
        onClick={handleGoToPage}
        className="px-4 py-2 transition-all border rounded hover:bg-color-orange hover:text-white border-color-primary"
      >
        Go
      </button>

      <p>
        {page} dari {lastPage}
      </p>

      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="px-4 py-2 transition-all border rounded hover:bg-color-orange hover:text-white border-color-primary"
        >
          Next
        </button>
      )}
    </div>
  );
}
