import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as unfilledStar } from "@fortawesome/free-regular-svg-icons";

import { Flex } from "@chakra-ui/react";

const Stars = () => {
    return (
        <Flex>
            <FontAwesomeIcon icon = {unfilledStar} />
            <FontAwesomeIcon icon = {filledStar} />
            <FontAwesomeIcon icon = {filledStar} />
            <FontAwesomeIcon icon = {filledStar} />
            <FontAwesomeIcon icon = {filledStar} />
        </Flex>
    );
}

export default Stars;