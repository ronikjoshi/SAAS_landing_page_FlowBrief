
import { HomeIcon, Menu, X, ArrowRight} from 'lucide-react';
import heroImage from '../assets/hero.png';
import { useState } from 'react';

const HeroSection = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {name: "Home", link: "#home"},
    {name: "About", link: "#about"},
    {name: "Education", link: "#education"},
    {name: "Pricing", link: "#pricing"},
    {name: "Services", link: "#services"},
    {name: "Why Us", link: "#whyus"},
  ]

  return (
    <div className='relative h-screen overflow-hidden'>
      <div
      className='absolute inset-0 bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: `url(${heroImage})`}}
      >
        <nav className="w-full py-4">

          <div className='flex items-center justify-between max-w-7xl mx-auto px-6'> {/* flex for (Home Icon and Education),(nav bar), (CTA) */}
            
            <div className='flex items-center space-x-3'> {/* flex for Home Icon and Education */}
              <div className='p-2 bg-blue-500 rounded-lg'>
                <HomeIcon className='w-6 h-6 text-white'/>
              </div>
              <span className='text-2xl font-bold text-white'>
                Education
              </span>
            </div> 
            
            <div className='hidden md:flex items-center space-x-8'>
              {navItems.map((item, index) => (
                <a
                key={item.name}
                href={item.link}
                className='text-white/80 hover:text-white transition-colors text-lg'
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className='hidden md:flex items-center space-x-3'>
              <button className='px-8 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors'>
                Sign in
              </button>
              <button className='px-6 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors'>
                Talk to us
              </button>
            </div>

            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white'
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          
          </div>
          {isMenuOpen && (
          <div className='md:hidden mt-4 py-4 bg-black/90 backdrop-blur-md rounded-lg'>
            {navItems.map((item, index) => (
              <a
              key={item.name}
              href={item.link}
              className='block py-2 px-6 text-white/80 hover:text-white hover:bg-white/10'
              onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className='block mt-4 mx-4 px-4 py-2 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>
              Sign in
            </button>
            <button className='block mt-6 mx-4 px-4 py-2 px-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>
              Talk to us
            </button>
          </div>
          )}
        </nav> 

        <div className='text-center'>    
          <h1
          className='text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:m-6 leading-tight'
          >
            Build your Digital
            <span
            className='block mt-2'
            >
              Future With Us
            </span>
          </h1>
          <p
          className='text-lg sm:text-xl text-white mb-6 md:mb-10 max-w-2xl mx-auto px-2'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga asperiors laborum?
          </p>
          
          <button
          className='block mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group mb-8 md:my-12'
          >
            Talk to us
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
          
        </div>  
      
      </div>
    </div>
  )
}

export default HeroSection


 

 