import React from "react";
import styled from "styled-components";


const StyleP = styled.p`
  text-align : left;
`;

export default function ParapgraphDiv({parag}) {
  return (
    <div className="paragraph" >
      <StyleP>{parag} </StyleP>
    </div>
  );
}