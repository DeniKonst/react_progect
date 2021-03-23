import React from 'react';
import Cls from './Header.module.css'

const Header = () => {
return (
<header className = {Cls.header}>
<img id = {Cls.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt = ''/>
</header>
)

}

export default Header;
