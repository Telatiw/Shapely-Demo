import Header from './Header/Header'
import SeoSection from './SeoSection/SeoSection'
import PortfolioSection from './PortfolioSection/PortfolioSection'
import SParalexSection from './sParalexSection/SmParalexSection'
import LSection from './LSection/LSection'
import OLPSection from './OLPSection/OLPSection'
import ImgSection from './ImgSection/ImgSection'
import WOCSSection from './WOCSSection/WOCSSection'
import OMCSection from './OMCSection/OMCSection'
import QSection from './QSection/QSection'
export default function Home() {
  return (
    <>
      <Header />
      <SeoSection />
      <PortfolioSection />
      <SParalexSection />
      <LSection />
      <OLPSection />
      <ImgSection />
      <WOCSSection />
      <OMCSection />
      <QSection />
    </>
  )
}
