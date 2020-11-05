import Link from 'next/link'

function Header() {
    return(
        <div>
            <Link href="/"> Home </Link>
            <Link href="/news" > news </Link>
            <Link href="/newblog" > SSR or CSR </Link>
            <Link href="about" > About </Link>
        </div>
    );
  }
  
export default Header