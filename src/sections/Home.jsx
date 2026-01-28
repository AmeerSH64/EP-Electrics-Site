import { IconBoltFilled, IconSunFilled } from '@tabler/icons-react';

const Home = () => {
  return (
    <section id="home" className='relative overflow-hidden'>
      <div className='home-layout'>
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className='flex flex-col gap-7'>
            <h1 className='animate-fade-in'>Providing 
              <span>Efficient</span>
              <IconSunFilled className='sun-icon' />
            </h1>
            <h1 className='animate-fade-in animation-delay-100'>and 
              <span className='span-2'>Electrifying</span>
              <IconBoltFilled className='elec-icon' />
            </h1>
            <h1 className='animate-fade-in animation-delay-200'>Solutions for</h1>
            <h1 className='animate-fade-in animation-delay-300'>Homes and</h1>
            <h1 className='animate-fade-in animation-delay-400'>Businesses</h1>
          </div>
          <a href="#services">
            <button className='btn-primary animate-fade-in animation-delay-500 mt-8 flex items-center gap-3'>
              SEE OUR SERVICES
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
              stroke-linecap="round" stroke-linejoin="round" 
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5l0 14" />
                <path d="M16 15l-4 4" />
                <path d="M8 15l4 4" />
              </svg>
            </button>
          </a>
        </header>

        <div className='home-images'>
          <img id="ev-charger" src="/images/EV-Charger.png" alt="EV Charger" 
          className='animate-fade-in animation-delay-300' />
          <img id="solar-panel" src="/images/Solar-Panel.png" alt="Solar Panels"
          className='animate-fade-in animation-delay-100' />
        </div>
      </div>
    </section>
  )
}

export default Home