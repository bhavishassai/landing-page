import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, NavbarContainer } from "./NavbarElements"
import { FaBars } from 'react-icons/fa'

interface NavbarProps {
    toggle?: React.MouseEventHandler<HTMLDivElement>
}


function Navbar(props: NavbarProps) {
    const [scrollnav, setScrollnav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollnav(true)
        } else {
            setScrollnav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggelHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <>
            <Nav $scrollnav={scrollnav}>
                <NavbarContainer>
                    <NavLogo onClick={toggelHome} to='/'>vuebank</NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} spy={true} offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} spy={true} offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} spy={true} offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} spy={true} offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar