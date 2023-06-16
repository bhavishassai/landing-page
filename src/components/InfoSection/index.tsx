import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "./InfoSectionElements"
import { Button } from "../ButtonElement"



interface InfoSectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const InfoSection = (props: InfoSectionProps) => {
    return (
        <>
            <InfoContainer id={props.id} $lightbg={props.lightBg}>
                <InfoWrapper>
                    <InfoRow $imgstart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading $lighttext={props.lightText}>{props.headline}</Heading>
                                <Subtitle $darktext={props.darkText}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} offset={-80} $primary={true} $dark={true}>{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection