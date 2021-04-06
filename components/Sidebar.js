import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { AiFillWechat } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt("please enter an email for the user you chat with");
    if (!input) return null;
    if (EmailValidator.validate(input)) {
      // we need to add this chat to a db.
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in Chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;
const MoreIcon = styled(MdMoreVert)`
  font-size: 40px !important;
`;
const ChatIcon = styled(AiFillWechat)`
  font-size: 40px !important;
`;
const SearchIcon = styled(FiSearch)`
  font-size: 25px !important;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
