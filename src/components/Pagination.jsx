// components/Pagination.jsx
const Pagination = ({ page, totalPages, next, prev, goTo }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    // first page
    pages.push(1);

    // left dots
    if (page > 3) {
      pages.push("...");
    }

    // middle window
    for (let i = page - 2; i <= page + 2; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // right dots
    if (page < totalPages - 2) {
      pages.push("...");
    }

    // last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      <button onClick={prev} disabled={page === 1}>
        Prev
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="dots">...</span>
        ) : (
          <button
            key={i}
            onClick={() => goTo(p)}
            className={page === p ? "active" : ""}
          >
            {p}
          </button>
        )
      )}

      <button onClick={next} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;