import React, { useEffect } from 'react';
import down_arrow from '../assets/down_arrow.png'
const Home = ({isDarkMode}) => {

  const textColor = isDarkMode ? 'white' : 'black'
  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5'

  useEffect(() => {
    const bg = document.querySelector('.background-image');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    bg.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
        
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

    const handleTouchMove = (e) => {
        const touchX = e.touches[0].clientX / windowWidth;
        const touchY = e.touches[0].clientY / windowHeight;
  
        bg.style.transform = `translate3d(-${touchX}%, -${touchY}%, 0)`;
      }

    bg.addEventListener('touchmove', handleTouchMove)
    return () => {
      bg.removeEventListener('mousemove', (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;
        
        bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      });
      bg.removeEventListener('touchmove', handleTouchMove)
    };
  }, []);

  document.querySelector('body').style.backgroundColor = backgroundColor
  return (
    <div className='home'>
      <div id='scroll-here'>For Scroll</div>
        <section id='top-section' style={{color: textColor}}>
            <div className='top-text'>
            <h1>Jackson's BBQ</h1>
            <p>(706) 486-2592</p>
            </div>
      <div className='background-image'>
      </div>
      <div className="scroll-down-arrow">
        <span>Scroll Down</span>
        <img className='down-arrow' src={down_arrow} alt="arrow-pointing-down" />
        </div>

      </section>
    </div>
  );
};

export default Home;
