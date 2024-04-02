import { useState } from 'react'
import './style/BottomNavBar.css'

function BottomNavBar() {
    const [active, setActive] = useState('home')
    return (
        <div className='nav-container'>
            <div className='navigation'>
                <ul>
                    <li className={`${active == 'home' ? 'list active' : 'list'}`}>
                        <a href="#" onClick={() => setActive('home')}>
                            <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                            <span className='text'>Home</span>
                        </a>
                    </li>
                    <li className={`${active == 'about' ? 'list active' : 'list'}`}>
                        <a href="#about" onClick={() => setActive('about')}>
                            <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
                            <span className='text'>About</span>
                        </a>
                    </li>
                    <li className={`${active == 'skills' ? 'list active' : 'list'}`}>
                        <a href="#skills" onClick={() => setActive('skills')}>
                            <span className='icon'><ion-icon name="ribbon-outline"></ion-icon></span>
                            <span className='text'>Skills</span>
                        </a>
                    </li>
                    <li className={`${active == 'projects' ? 'list active' : 'list'}`}>
                        <a href="#projects" onClick={() => setActive('projects')}>
                            <span className='icon'><ion-icon name="code-slash-outline"></ion-icon></span>
                            <span className='text'>Projects</span>
                        </a>
                    </li>
                    <li className={`${active == 'contact' ? 'list active' : 'list'}`}>
                        <a href="#contact" onClick={() => setActive('contact')}>
                            <span className='icon'><ion-icon name="chatbubble-outline"></ion-icon></span>
                            <span className='text'>Contact</span>
                        </a>
                    </li>
                    <div className='indicator'></div>
                    
                </ul>
            </div>
            <div className='background-nav'></div>
        </div>
    )
}

export default BottomNavBar