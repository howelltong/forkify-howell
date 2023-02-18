
//DOM => input fields 

class SearchView {
    _parentEl = document.querySelector('.search')

    //8. get query
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput() //8. keeping clearInput function within view
        return query;
    }

    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }

    //8. pub/sub 
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (e) { //8. cannot pass handler() directly as DOM is form and default refresh must be prevented
            e.preventDefault();
            handler()
        })
    }

}

export default new SearchView()