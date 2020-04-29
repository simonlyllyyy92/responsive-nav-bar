import React from 'react'

import './header-toolbar.styles.scss'
import HamburgerButton from './hamburger-button.component'

const Toolbar = ({handleOnclick}) => (
    <header className = 'toolbar'>
        <nav className = 'toolbar_navigation'>
            <div className = 'toggle-button'>
                <HamburgerButton handleOnclick = {handleOnclick}/>
            </div>
            
            <div className = 'toolbar_logo'><a href='/'>THE LOGO</a></div>
            <div className = 'spacer'></div>
            <div className = 'toolbar_navigation_items'>
                <ul>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>User</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar;