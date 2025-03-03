import Hero from '../components/hero';
import InfoBoxes from '@/components/infoBoxes';
import Footer from '@/components/footer';
import HomeProperties from '@/components/homeProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </>
  );
}

export default HomePage;