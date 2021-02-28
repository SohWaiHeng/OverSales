import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as unfilledStar } from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components';
import { Flex } from "@chakra-ui/react";

const HoveredIcon = styled(FontAwesomeIcon)`
    :hover {
        cursor: pointer;
    }
`

const Stars = (props) => {
    const generateStars = () => {
        if (props.interactable) {
            var n = 5;
            var i;
            var stars = [];
            for (i = 0; i < 5-props.number; i++) {
                let k = n;
                stars.push(<HoveredIcon size = "2x" icon = {unfilledStar} onClick={()=>{props.onChange(k)}}/>);
                n--;
            }
            for (i = 0; i < props.number; i++) {
                let k = n;
                stars.push(<HoveredIcon size = "2x" icon = {filledStar} onClick={()=>{props.onChange(k)}}/>);
                n--;
            }
            return stars;
        }
        else {
            var i;
            var stars = [];
            for (i = 0; i < 5-props.number; i++) {
                stars.push(<FontAwesomeIcon size = "2x" icon = {unfilledStar} />);
            }
            for (i = 0; i < props.number; i++) {
                stars.push(<FontAwesomeIcon size = "2x" icon = {filledStar} />);
            }
            return stars;
        }
    }
    return (
        <Flex>
            {generateStars()}
        </Flex>
    );
}

export default Stars;