import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    max-width:1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Nav = styled.nav`
    background:#333;
    color: #fff;
    padding: 15px;
    
    a{
        color:#fff;
        margin-right: 10px;
        text-decoration:none;
        font-size: 18px;
        font-weight: 100;
    }
`
function Navigation() {

    return (
        <Nav>
            <Container>
                <Link href="/" className="logo">
                    <a>
                        <h1>NEXT STORE</h1>
                    </a>
                </Link>
                <div className="navbar">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </div>
            </Container>
        </Nav>
    )
}

export default Navigation