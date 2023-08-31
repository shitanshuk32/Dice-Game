import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="imgDiv">
        <img src="/images/dices1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .imgDiv {
    padding-left: 7vw;
    width: 50%;
    img {
      width: 35vw;
      height: 30vw;
    }
  }
  .content {
    h1 {
      font-size: 7vw;
      white-space: nowrap;
    }
  }
`;
