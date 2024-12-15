import Slider from "../Components/Slider/Slider"
import Top from "../Components/Top/Top"
import Upcoming from "../Components/Upcoming/Upcoming"

const Home = () => {

  return (
    <>
      <header className="header">
        <Upcoming />
      </header>
      <main>
        <Slider type={'movie'} />
        <Slider type={'tv'} />
        <Top  />
      </main>
    </>
  )
}

export default Home