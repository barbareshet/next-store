import Link from "next/link";
const MyApp = ({ Component, pageProps }) => {
    return  (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <Link href="/client-side">
                <a>Client Side Rendering</a>
            </Link>
            <Link href="/ssg">
                <a>Server Side Rendering</a>
            </Link>
            <Component {...pageProps} />
            <footer>&copy; Next Store 2021 </footer>
        </>
    )
}
export default MyApp