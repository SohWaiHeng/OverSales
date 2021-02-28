import React from "react";
import Color from "../common/Color";
import styled from 'styled-components';

const Container = styled.div`
    width: 700px;
    min-height: 100px;
    background: ${Color.green1};
    border-radius: 30px;
    overflow-y: hidden;
`

const ImgContainer = styled.div`
    height: 100px;
    & img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`

const ContentContainer = styled.div`
    
`

const BigCard = (props) => {
    return(
        <Container>
            <ImgContainer>
                <img src="https://www.globaltimes.cn/Portals/0/attachment/2020/2020-07-28/9f4a7501-dfb5-4bfd-8e2e-c66f32e47a91.jpeg"></img>
            </ImgContainer>
            <ContentContainer>
                
            </ContentContainer>
        </Container>
    )
}

export default BigCard;