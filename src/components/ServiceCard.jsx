const ServiceCard = ({ name, description }) => {
  return (
    <div className="bg-black-50 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-white-50">{description}</p>
    </div>
  )
}

export default ServiceCard