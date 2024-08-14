import Logo from '../Images/logo.png'
export function Navbar(){
    return(
        <nav className='navbar'>
            <img src={Logo} alt='AirbnbLogo' className='logo'/>
        </nav>
    )
}