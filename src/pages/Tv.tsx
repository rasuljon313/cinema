import Content from "../Components/Content/Content"

const Tv = () => {
  return (
    <>
      <div className="movie">
        <div className="container">
          <h2 className="movie_title">Все Сереалы</h2>
          <Content type='tv' />
        </div>
      </div>
    </>
  )
}

export default Tv