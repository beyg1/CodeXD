import Container from '../Container';

const services = [
  {
    title: 'AC Installation',
    description: 'Professional installation of all types of air conditioning units',
    icon: '❄️',
  },
  {
    title: 'AC Maintenance',
    description: 'Regular maintenance to ensure optimal performance',
    icon: '🔧',
  },
  {
    title: 'Emergency Repairs',
    description: '24/7 emergency repair services for all AC problems',
    icon: '🚨',
  },
  {
    title: 'AC Cleaning',
    description: 'Deep cleaning services for better air quality',
    icon: '✨',
  },
];

export default function Services() {
  return (
    <section className="min-h-screen flex items-center py-20" id="services">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Comprehensive AC solutions for your home and business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
