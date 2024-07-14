import Navbar from "./components/Navbar/Navbar";
import { Hero, PopularProducts, SuperQuality, SpecialOffers, 
        Services, Subscribe, CustomerReviews } from "./sections";
import Footer from './components/Footer';


function App() {
  
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="w-full padding-x py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App;
