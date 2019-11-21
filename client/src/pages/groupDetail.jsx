import React from "react";
import styled from "styled-components";
import Header from "../components/groupDetailHeader";
import Main from "../components/groupDetailMain";
import Intro from "../components/groupDetailIntro";

const StyledGroupDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
  margin: 3rem auto;
`;

const GroupDetail = ({ data }) => {
  const {
    title,
    category,
    studyThumbnail,
    location,
    time,
    minCnt,
    nowCnt,
    maxCnt,
    tags,
    isMaster,
    isMember,
    status
  } = data;

  return (
    <StyledGroupDetail>
      <Header data={{ title, category }}></Header>
      <Main
        data={{
          studyThumbnail,
          location,
          time,
          minCnt,
          nowCnt,
          maxCnt,
          tags,
          isMaster,
          isMember,
          status
        }}
      ></Main>
      <Intro></Intro>
    </StyledGroupDetail>
  );
};

export default GroupDetail;
