import React from "react";
import styled from "styled-components";


const StyledImg = styled.img`
  max-width: 800px;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default function ImageDiv({image}) {
  return (
    <div className="image">
      <StyledImg src= {image} />
    </div>
  );
}

