import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";


export default function Services() {
  return (
    <Wrapper id="services">

      <div className="lightBg" style={{ padding: "60px 0" }}>

        <div className="container">
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="box"
                title="All-in-one place"
                subtitle="Bring all your co-work tools together and manage multiple projects in one central destination."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Easy to use"
                subtitle="Everybody can get up and running our app in minutes."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="folder"
                title="Collaboration"
                subtitle="Work simultaneously in the same document with the whole class or connect face-to-face with Meet."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="phone" title="Access anywhere" subtitle="Empower from anywhere, on any device, and give your class more flexibility and mobility." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`

@media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  margin-left: 5%;

  text-align: center;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;


