
import { HomeIcon } from 'lucide-react';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
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
        <div className='flex items-center justify-between max-w-7xl mx-auto px-6'> {/* flex for (Home Icon and Education),(nav bar), (CTA) */}
          <div className='flex items-center space-x-3'> {/* flex for Home Icon and Education */}
            <div className='p-2 bg-blue-500 rounded-lg'>
              <HomeIcon className='w-6 h-6 text-white'/>
            </div>
            <div className='text-2xl font-bold text-white'>
              Education
            </div>
          </div> 
          <div className=''>
            {navItems.map((item, index) => (
              <a
              key={item.name}
              href={item.link}
              className='text-white text-lg'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>CTA</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection


 

 