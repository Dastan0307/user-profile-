import Image from 'next/image'
import logo from '../../../public/Logo.svg'

const Header = () => {
  return (
	<header>
		<div>
			<Image src={logo} alt='logo' width={180} height={40} />
		</div>
	</header>
  )
}

export default Header