import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import { MdMoreVert } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>{getRecipientEmail(chat.users, user)} </h3>
          <p>last seen ...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachIcon />
          </IconButton>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </HeaderIcons>
      </Header>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div``;

const HeaderInformation = styled.div``;

const HeaderIcons = styled.div``;

const MoreIcon = styled(MdMoreVert)`
  font-size: 25px !important;
`;
const AttachIcon = styled(MdAttachFile)`
  font-size: 25px !important;
`;
