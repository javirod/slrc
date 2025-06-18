import { Link } from 'react-router-dom';
function Navbar() {
   return (
      <nav>
         <img className='logo' src='/SLRC_PPG_LOGO.png' alt='SLRC Logo'></img>
         {/* <h2>Seattle Latinas Run Club</h2> */}
         {/* <Link to="/">Home</Link> */}
      </nav>
   )
}

export default Navbar;