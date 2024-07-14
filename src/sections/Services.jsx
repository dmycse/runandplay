import { services } from "../constans";
import ServiceCard from "../components/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <div className='max-container flex justify-center flex-wrap gap-9'>
      {services.map(service => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}
