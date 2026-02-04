const ServiceCard = ({ name, SIcon, image, description }) => {
  return (
    <div className="bg-black-50 rounded-xl h-full service-card">
      <a href="#">
        <img src={image} alt={name} className="block w-full h-48 object-cover rounded-xl" />
      </a>
      <div className="service-card-text">
        <SIcon className="absolute w-40 h-40 mb-4 text-secondary mt-12" />
        <h3 className="text-xl font-bold mb-2 z-10">{name}</h3>
        <p className="text-white-50 z-10">{description}</p>
      </div>
      
    </div>
  )
}

export default ServiceCard