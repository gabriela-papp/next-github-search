import Link from 'next/link'
import {Poppins} from 'next/font/google'
import navStyles from '../styles/Nav.module.css'

const poppins = Poppins({
  weight: ['400','700'],
  subsets:['latin']
})

const Nav = () => {
  return (
    <div>
        <nav className={navStyles.nav}>
            <ul className={poppins.className}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog Post</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav
