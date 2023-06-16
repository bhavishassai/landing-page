import styled from "styled-components"
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

interface SideBarProps {
    $isopen: boolean
}

export const SideBarContainer = styled.aside<SideBarProps>`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${(props) => props.$isopen ? '100%' : '0'};
    top: ${({ $isopen }) => ($isopen ? '0' : '-1000px')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`
export const SideBarWrapper = styled.div`
    background-color: #000;
`
export const SideBarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
    }
`
export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    padding: 16px;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    /* list-style: none; */
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const SideBarRoute = styled(LinkS)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 1.4rem;
    outline: none;
    /* border: none; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`

