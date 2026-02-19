import { HomeIcon, Menu, X, ArrowRight} from 'lucide-react';
import heroImage from '../../assets/hero.png';

const HeroSection = () => {
  return (
      <section className='relative h-screen w-full flex flex-col'>
        <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${heroImage})`}}>
        </div>
        <div className='relative z-10 flex justify-between items-center p-6 text-white'>
          <div className='flex'>
            <div>ICON And GIGA</div>
            <div>Product</div>
            <div>Company</div>
          </div>
          <div className='flex'>
            <div>Sign IN</div>
            <div>Talk to us</div>
          </div>
        </div>
        <div className='relative z-10 flex-1 flex flex-col items-center justify-center'>
          <div>GIGA launches Browser Agent</div>
          <div>AI that talks like a human. Handles millions of calls</div>
          <div>AI agent for enterprise support</div>
          <div>Talk to us</div>
        </div>
        <div className='relative z-10 flex justify-between items-center p-6'>
          <div>Postman</div>
          <div>Rio</div>
          <div>DoorDash</div>
          <div>Capital.com</div>
          <div>afriex</div>
          <div>sendoso</div>
        </div>
      </section>
  )
}

export default HeroSection;