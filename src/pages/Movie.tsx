import Content from "../Components/Content/Content"

const Movie = () => {
    return (
        <>
            <div className="movie">
                <div className="container">
                    <h2 className="movie_title">Все фильмы</h2>
                    <Content type='movie' />
                </div>
            </div>
        </>
    )
}

export default Movie