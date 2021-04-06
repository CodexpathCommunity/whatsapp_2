import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Chat({ id, users }) {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Emails </p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px 15px 5px 5px;
`;
