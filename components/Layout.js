import Link from 'next/link'
import Head from 'next/head'
 
import Header from './header'

function Layout({children}){
    return (
        <div>

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" /> 
            </Head>

            <Header />

            {children}


            <footer>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by Andrei
                </a>
            </footer>

        </div>
    );
}

export default Layout