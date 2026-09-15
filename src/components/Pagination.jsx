export function Pagination({ pagination, onPageChange }) {
  if (!pagination) return null;

  const {
    current_page,
    total,
    per_page,
  } = pagination;

  const totalPages = Math.ceil(total / per_page);

  if (totalPages <= 1) return null;

  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  return (
    <nav className="overflow-auto max-w-1/2 max-[992px]:max-w-full">
      <ul className="flex items-center gap-1.25 w-full scrollbar-thumb-[#27C5D2] overflow-auto max-w-full">
        {current_page > 1 && <li>
          <button
            disabled={current_page === 1}
            onClick={() => onPageChange(current_page - 1)}
            className="h-10 shrink-0 px-3 text-[#7c7c7c] flex items-center justify-center rounded-lg bg-[#f8f8f8] cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ←
          </button>
        </li>}

        {pages.map((page) => {
          return (
            <li key={page} className="flex items-center gap-1.25">
              <button
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out ${
                  page === current_page
                    ? "bg-[#27C5D2] text-white"
                    : "bg-[#f8f8f8] text-[#7c7c7c] hover:bg-[#e9ecef]"
                }`}
              >
                {page}
              </button>
            </li>
          );
        })}

        {current_page < pages.length && <li>
          <button
            disabled={current_page === totalPages}
            onClick={() => onPageChange(current_page + 1)}
            className="h-10 shrink-0 px-3 text-[#7c7c7c] flex items-center justify-center rounded-lg bg-[#f8f8f8] cursor-pointer hover:bg-[#e9ecef] transition-colors duration-300 ease-in-out disabled:opacity-40 disabled:cursor-not-allowed"
          >
            →
          </button>
        </li>}
      </ul>
    </nav>
  );
}
