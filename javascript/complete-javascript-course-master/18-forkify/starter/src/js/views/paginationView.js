import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto; // converted string to number
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1 with further results
    if (currentPage === 1 && numPages > 1) {
      return this.#generateMarkupNext(currentPage);
    }
    // Middle page results
    if (currentPage < numPages) {
      return (
        this.#generateMarkupPrevious(currentPage) +
        this.#generateMarkupNext(currentPage)
      );
    }
    // Last page results
    if (currentPage === numPages && numPages > 1) {
      return this.#generateMarkupPrevious(currentPage);
    }
    // Page 1 with no further results
    return '';
  }

  #generateMarkupPrevious(currentPage) {
    return `
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
      `;
  }

  #generateMarkupNext(currentPage) {
    return `
        <button data-goto="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }
}

export default new PaginationView();
