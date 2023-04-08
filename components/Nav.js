import Link from 'next/link'
import {Poppins} from 'next/font/google'
import styles from '../styles/Nav.module.css'

const poppins = Poppins({
  weight: ['400','700'],
  subsets:['latin']
})

export const Nav = () => {
  return (
    <div>
        <h1>Github Search</h1>
        <nav className={styles.navStyles}>
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
