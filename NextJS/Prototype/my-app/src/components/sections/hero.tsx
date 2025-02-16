import  ButtonPrimary  from "../ui/button-primary";


export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-row items-center justify-center px-4 md:items-start md:text-left">
      
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
      
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Introduce Reasoning & LLMs to your <span className="text-red-600">Automated WorkFlow</span>
        </h1>
        <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl">
          Select opensource AI Agents from our library & transform your business. Request custom AI Agents for your unique Automation workflows from developers, who are contributing to the opensource Eco System.
        </h2>        
        <ButtonPrimary className="mt-12" href="https://www.youtube.com/watch?v=9PoGWIK9DmE" target="_blank">
          See Demo
        </ButtonPrimary>  
        </div>
        
        {/* <div className="absolute top-48 right-20 w-1/2 h-1/2">  
            place for an interactive element         
        </div>             */}
    </section>
  );
}
