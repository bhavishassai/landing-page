import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';


export const HeroContainer = styled.div`
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 2;

`
export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    &:before {
        content: '';
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.3) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%);
        z-index: 1;
        width: 100%;
        height: 100%;
    }

`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover; 
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 6;
    max-width:100%;
    position: absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align:center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align:center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`


