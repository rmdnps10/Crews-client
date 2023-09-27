import { Flex } from "components/atoms";
import { useState } from "react";
import styled from "styled-components";
export const CollaboCrews =()=>{
    const [clubList,setClubList] = useState([1,2,3]);
    return (
        <>
            <Flex gap={"10"}>
                {
                    clubList.map(()=>{
                        return(
                            <CrewsCard/>
                        );
                    })
                }
            </Flex>
        </>
    );
}

const CrewsCard = styled.div`
    width: 6.25rem;
    height: 6.25rem;
    border-radius : 100%;
    background-color : black
`;