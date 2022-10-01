import './SearchForm.css'

function SearchForm({ searchFormInput, durationButton, setSearchFormInput, setDurationButton }) {

    return (
        <section className="search">
            <form className="search__form from-search" onSubmit={evt => evt.preventDefault()}>
                <input
                    className="from-search__input"
                    type="text"
                    name='film'
                    placeholder='Фильм'
                    value={searchFormInput}
                    onInput={event => setSearchFormInput(event.target.value)}
                />
                <button className="from-search__button" type="submit" />
                <label className="from-search__label" >
                    <input
                        className="from-search__checkbox"
                        type="checkbox"
                        name='short'
                        checked={durationButton}
                        onChange={event => setDurationButton(event.target.checked)}
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
