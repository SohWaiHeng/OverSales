import React from "react";
import Color from "../common/Color";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBox, faDollarSign, faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Stars from "../components/Stars";

const Container = styled.div`
    width: 700px;
    background: ${Color.green1};
    overflow-y: hidden;
`

const ImgContainer = styled.div`
    height: 250px;
    & img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`

const ContentContainer = styled.div`
    padding: 40px 40px;
    position: relative;
    & > :not(:last-child) {
        margin-bottom: 20px;
    }
`

const Row = styled.div`
    display:flex;
    align-items: center;
    & > :not(:last-child) {
        margin-right: 20px;
    }
`

const ProfilePicContainter = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow-y: hidden;
    & img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50px;
    height: 50px;
`

const NotesContainer = styled.div`
    padding: 10px;
`

const GeneralText = styled.span`
    font-size: 1.2rem;
`

const MainText = styled(GeneralText)`
    font-weight: 700;
    color: ${Color.green3};
`

const DescText = styled(GeneralText)`
    color: ${Color.green3};
`

const StaticText = styled(GeneralText)`
    color: ${Color.green4};
`

const Button = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    border-radius: 30px;
    background: ${Color.green4};
    : hover {
        cursor: pointer;
        opacity: 0.75;
    }
`

const MinimiseContainer = styled.div`
    position: absolute;
    right: 50px;
    bottom: 30px;
    : hover {
        cursor: pointer;
        opacity: 0.75;
    }
`

const BigCard = (props) => {
    return(
        <Container>
            <ImgContainer>
                <img src="https://www.globaltimes.cn/Portals/0/attachment/2020/2020-07-28/9f4a7501-dfb5-4bfd-8e2e-c66f32e47a91.jpeg"></img>
            </ImgContainer>
            <ContentContainer>
                <Row>
                    <ProfilePicContainter>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF1zPYATG9muA/profile-displayphoto-shrink_800_800/0/1597227814301?e=1620259200&v=beta&t=qUSpTtyuU4VH3GTlGxhbr4lGxCCw_8p90rERVEW9Lfk"></img>
                    </ProfilePicContainter>
                    <div style={{display:"flex", justifyContent:"space-between", width: "450px"}}>
                        <div>
                            <div>
                                <MainText>{props.name}</MainText>
                            </div>
                            <div>
                                <DescText>{props.biography}</DescText>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Stars number={props.rating}></Stars>
                        </div>
                    </div>
                </Row>
                <Row>
                    <IconContainer>
                        <FontAwesomeIcon icon = {faMapMarkerAlt} size="2x"/>
                    </IconContainer>
                    <div>
                        <StaticText>From </StaticText>
                        <MainText>{props.fromCountry}</MainText>
                    </div>
                    <div>
                        <StaticText>To </StaticText>
                        <MainText>{props.toCountry}</MainText>
                    </div>
                </Row>
                <Row>
                    <IconContainer>
                        <FontAwesomeIcon icon = {faBox} size="2x"/>
                    </IconContainer>
                    <div>
                        <StaticText>Dimension</StaticText> <br/>
                        <MainText>{props.width}cm x {props.length}cm x {props.height}cm</MainText>
                    </div>
                    <div>
                        <StaticText>Weight</StaticText> <br/>
                        <MainText>{props.width}kg</MainText>
                    </div>
                </Row>
                <Row>
                    <IconContainer>
                        <FontAwesomeIcon icon = {faDollarSign} size="2x"/> 
                    </IconContainer>
                    <div>
                        <MainText style={{fontSize: "2rem"}}>{props.price}HKD</MainText>
                    </div>
                </Row>
                <NotesContainer>
                    <div>
                        <StaticText>Additional Notes</StaticText>
                    </div>
                    <div>
                        <DescText>{props.additionalInformation}</DescText>
                    </div>
                </NotesContainer>
                <Row>
                    <Button>
                        <IconContainer style={{color:Color.green1}}>
                            <FontAwesomeIcon icon = {faComment} size="2x"/>
                        </IconContainer>
                        <MainText style={{color:Color.green1}}>Message</MainText>
                    </Button>
                </Row>
                <MinimiseContainer>
                    <IconContainer style={{color:Color.green4}}>
                        <FontAwesomeIcon icon = {faCompressAlt} size="2x" />
                    </IconContainer>
                </MinimiseContainer>
            </ContentContainer>
        </Container>
    )
}

export default BigCard;