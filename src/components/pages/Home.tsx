import styled from "styled-components";
import { SkillsBanner } from "../skills/SkillsBanner";
import { content } from "../../content/content";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 50%;
  flex-wrap: wrap;
  line-height: 2;
  gap: 20px;

  align-items: center;
  p {
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <p>{content.p1}</p>
      <p>
        {content.p2}
      </p>
      <p>
        {content.p3}
      </p>
      <p>
        {content.p4}
      </p>

      <SkillsBanner />
    </HomeWrapper>
  );
};

export default Home;
