import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItme from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  }
  return (
    <div className="main-container" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachObj => (
          <PlanetItme data={eachObj} key={eachObj.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
