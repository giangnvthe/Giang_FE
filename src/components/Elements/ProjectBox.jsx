import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, action }) {
  return (

    <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth: '300px',
        minHeight: '200px',
        margin: '20px 0',
        borderRadius: '10px'

      }}>
        <h3 className="font20 extraBold" style={{
          paddingTop: '40px'
        }}>{title}</h3>
      </div>
    </ImgBtn>


  );
}


const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > div {
    opacity: 0.5;
  }
`;