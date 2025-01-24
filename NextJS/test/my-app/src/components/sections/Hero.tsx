import Container from '../Container';
import Button from '../Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-blue-400 via-blue-500 to-blue-800 pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Expert AC Services in Dubai
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Professional air conditioning installation, maintenance, and repair services. Keep your space cool and comfortable all year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Get Free Quote</Button>
              <Button variant="secondary">Our Services</Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px] bg-white/30 rounded-2xl p-8">
            Add Illustration here
          </div>
        </div>
      </Container>
    </section>
  );
}
