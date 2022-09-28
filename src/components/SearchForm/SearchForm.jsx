import './SearchForm.css'

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form from-search">
                <input
                    className="from-search__input"
                    type="text"
                    name='film'
                    placeholder='Фильм'
                />
                <button className="from-search__button" type="submit" />
                <label className="from-search__label" >
                    <input
                        className="from-search__checkbox"
                        type="checkbox"
                        name='short'
                    />
                    <div className="from-search__custom-checkbox">
                        <div className="from-search__custom-mark"></div>
                    </div>
                    <p className="form-search__label-text">Короткометражки</p>
                </label>
            </form>
        </section>
    );
}

export default SearchForm;
