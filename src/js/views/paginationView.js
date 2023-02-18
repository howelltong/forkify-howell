import View from './View.js'
import icons from 'url:../../img/icons.svg' //parcel 1

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination')

    //11. pub/sub 
    addHandlerClick(handler) {
        //event delegation => two buttons 
        this._parentElement.addEventListener('click', function (e) { //cannot pass func directly => need to determine which button is being clicked first
            const btn = e.target.closest('.btn--inline') //11. .closest => up the tree (parent) on click ==> target element (trigger click) will look for closest parent with '.btn--inline' class and EXECUTE HANDLER FUNCTION i.e. function is tied to parent but can be triggered by children elements (e.g. span or icon)
            // console.log(btn);
            if (!btn) return;

            const goToPage = +btn.dataset.goto //11. convert to number for next/previous page 
            // console.log(goToPage); //string of number 

            handler(goToPage); //pass goToPage number back to controller
        })
    }

    _generateMarkup() {
        const curPage = this._data.page

        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // console.log(numPages);
        // 11. data require: State => search {results, page, resultsPerPage}

        //11. ADD DATA ATTRIBUTE TO HTML ELEMENTS => tie data to pages to direct page selection => dataset

        // 11. Page 1, and there are other pages

        if (curPage === 1 && numPages > 1) {
            return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }

        // 11. Last page
        if (curPage === numPages && numPages > 1) { //11. exclude page 1 scenario in second operand as already accounted for
            //return previous button
            return ` 
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
            `
        }

        // 11. Other page
        if (curPage < numPages) {
            return ` 
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }

        // 11. Page 1, and there are NO other pages
        return '' //page 1 => no need to render any buttons (no prev or next)
    }

}

export default new PaginationView();
