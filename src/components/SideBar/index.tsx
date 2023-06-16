
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper, SideBtnWrap } from './SideBarElements'

interface SideBarProps {
    $isopen: boolean
    toggle?: React.MouseEventHandler<HTMLDivElement>
}


const SideBar = (props: SideBarProps) => {
    return (
        <SideBarContainer $isopen={props.$isopen}>
            <Icon>
                <CloseIcon onClick={props.toggle} />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about'>About</SideBarLink>
                    <SideBarLink to='discover'>Discover</SideBarLink>
                    <SideBarLink to='services'>Services</SideBarLink>
                    <SideBarLink to='signup'>Sign Up</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/signin'>Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar