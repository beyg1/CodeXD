import Container from '../Container';

const features = [
  {
    title: '24/7 Support',
    description: 'Round-the-clock emergency services',
  },
  {
    title: 'Certified Technicians',
    description: 'Experienced and qualified professionals',
  },
  {
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty on all services',
  },
  {
    title: 'Competitive Pricing',
    description: 'Best-in-class service at reasonable rates',
  },
];

export default function Features() {
  return (
    <section className="min-h-screen flex items-center py-20" id="features">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Leading AC service provider in Dubai with years of experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
