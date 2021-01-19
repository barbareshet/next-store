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
            <Component {...pageProps} />
            <footer>&copy; Next Store 2021 </footer>
        </>
    )
}
export default MyApp