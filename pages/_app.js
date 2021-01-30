import { Normalize } from "styled-normalize";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import "../assets/css/styles.css"
const Container = styled.div`
    max-width:1140px;
    margin: 0 auto;
    height: 100vh;
`
const MyApp = ({ Component, pageProps }) => {
    return  (
        <>
            <Normalize/>
            <Navigation/>
            <Container>
                <Component {...pageProps} />
                <footer>&copy; Next Store { new Date().getFullYear()} </footer>
            </Container>
        </>

    )
}
export default MyApp