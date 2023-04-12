import WorkSpace from './WorkSpace';
import ControlPanelV2 from './controlPanelV2/ControlPanelV2';
import Navbar from '../homepage/navbar/Navbar';
import Footer from '../homepage/footer/Footer';



function CarConfigurator() {

  return (
    <>
      <Navbar />
      <div className='grand-workspace'>
        <WorkSpace />
      </div>
      <ControlPanelV2 />
      <Footer />
    </>
  )
}

export default CarConfigurator
