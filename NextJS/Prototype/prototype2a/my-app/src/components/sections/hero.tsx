import  ButtonPrimary  from "../ui/button-primary";
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:items-start md:text-left">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <h1 className="mt-20 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Revolutionize Your Business with <br className="hidden sm:block" /> <span className="text-red-600">On-Demand AI Agents</span>
        </h1>
        <h2 className="mt-8 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl">
          Agentify Precision, Speed, and Scalability with Agentia World&#39;s Vertical AI Agents.
          Whether you&#39;re in healthcare, logistics, finance, or beyond, our innovative agents transform operations instantly.
        </h2>        
        <ButtonPrimary className="mt-12"> 
          See Demo
        </ButtonPrimary>        
      </div>
    </section>
  );
}
