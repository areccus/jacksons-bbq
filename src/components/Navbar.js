import { useEffect, useState } from 'react';
import logo_white from '../assets/logo_white.png';
import Form from 'react-bootstrap/Form';
import { HouseDoorFill, ListTask, PeopleFill, ThreeDotsVertical } from 'bootstrap-icons-react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showThreeDots, setShowThreeDots] = useState(false)
  const navText = isDarkMode ? 'black' : 'white';
  const dotColor = isDarkMode ? 'white' : 'black';

  const navColor = isDarkMode ? 'white' : '#121212';

  let timer;


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // if (mobileNav) {
    //   mobileNav.style.backgroundColor = navColor;
    // }

    if (windowWidth > 926) {
        setShowNavbar(true);
      } else {
        timer = setTimeout(() => {
          setShowNavbar(false);
        }, 3000);
      }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [windowWidth, navColor]);

  const [showNavbar, setShowNavbar] = useState(true);

  const resetTimer = () => {
    setShowNavbar(true);
    setShowThreeDots(false)
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.backgroundColor = navColor;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setShowNavbar(false);
      mobileNav.style.backgroundColor = 'transparent';
      setShowThreeDots(true)
    }, 3000);
  };

  return (
    <div
      className={windowWidth > 926 ? 'navbar' : 'mobile-nav'}
      onClick={resetTimer}
      onTouchStart={resetTimer}
    >
      {windowWidth > 926 && (
        <div className='nav-logo'>
          <a href='#top-section'>
            <img src={logo_white} alt="jackson's-logo" />
          </a>
        </div>
      )}
      <div className='nav-links'>
        {showNavbar && (
          <>
            {windowWidth > 926 ? (
              <>
                <a href='#top-section'>
                  <h2>Home</h2>
                </a>
                <div className='nav-menu'>
                  <a href='#menu'>
                    <h2>Menu</h2>
                  </a>
                </div>
                <a href='#about-us'>
                  <h2>About Us</h2>
                </a>
                {/* <a href="#contact"><h2>Contact US</h2></a> */}
              </>
            ) : (
              <div className='mobile-menu'>
                <div className='nav-item'>
                  <a href='#scroll-here'>
                    <HouseDoorFill
                      style={{ color: navText, fontSize: '1.3rem' }}
                    ></HouseDoorFill>
                  </a>
                </div>
                <div className='nav-item'>
                  <a href='#menu'>
                    <ListTask
                      style={{ color: navText, fontSize: '1.3rem' }}
                    />
                  </a>
                </div>
                <div className='nav-item'>
                  <a href='#contact'>
                    <PeopleFill
                      style={{ color: navText, fontSize: '1.3rem' }}
                    />
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {showNavbar && (
        <div className='dark-mode-toggle'>
          <Form.Check
            type='switch'
            id='dark-mode-switch'
            checked={isDarkMode}
            onChange={toggleDarkMode}
            label=''
            data-toggle='toggle'
            data-on='Dark'
          data-off='Light'
          data-onstyle='dark'
          data-offstyle='light'
          style={{fontSize: '1rem'}}
        />
      </div>
      )}
      <div>
      {showThreeDots && (
          <div className='nav-item dots'>
            <ThreeDotsVertical style={{ color: dotColor, fontSize: '2.5rem' }} />
          </div>
        )}
      </div>
    </div>
  )}


export default Navbar