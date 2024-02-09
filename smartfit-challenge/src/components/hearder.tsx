import logo from '../assets/images/logo.svg';

const Header = () => {
  return(
    <div className='flex items-center justify-center p-5 bg-black'>
      <img width={180} src={logo} alt="logo smartfit" />
    </div>
  )
}

export default Header;