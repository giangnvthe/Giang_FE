import React from "react";
import styled from "styled-components";
// Assets
import PhoneIcon from "../../assets/svg/Services/PhoneIcon";
import FolderIcon from "../../assets/svg/Services/FolderIcon";
import BoxIcon from "../../assets/svg/Services/BoxIcon";
import BoyIcon from "../../assets/svg/Services/BoyIcon";


export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "box":
      getIcon = <BoxIcon />;
      break;
    case "boy":
      getIcon = <BoyIcon />;
      break;
    case "folder":
      getIcon = <FolderIcon />;
      break;
    case "phone":
      getIcon = <PhoneIcon />;
      break;
    default:
      getIcon = <BoxIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;