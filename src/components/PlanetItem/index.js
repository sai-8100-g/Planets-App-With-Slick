import './index.css'

const PlanetItme = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <div className="carousel">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItme
