import Container from '../Container';
import Button from '../Button';

export default function CTA() {
  return (
    <section className="h-screen w-full bg-blue-600">
      <div className="h-full w-full flex items-center justify-center">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Superior AC Services?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-12">
              Get in touch with us today for a free consultation and quote. We&apos;re here to keep you cool and comfortable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" className="text-lg">
                Call Now: +971 50 123 4567
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg">
                Request Service
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
