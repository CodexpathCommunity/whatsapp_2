import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import { MdMoreVert } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { BsMicFill } from "react-icons/bs";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { useState } from "react";
import firebase from "firebase";

function ChatScreen({ chat, messages }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnapshot] = useCollection(
    db
      .collection("chat")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    } else
      JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ));
  };

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("users").doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    db.collection("chat").doc(router.query.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });

    setInput("");
  };

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
      <MessageContainer>
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>

      <InputContainer>
        <SmileIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disabled={!input} type="submit" onClick={sendMessage}>
          Send message
        </button>
        <MicIcon />
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 13px;
  box-sizing: border-box;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;
const EndOfMessage = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;

const HeaderIcons = styled.div``;

const MoreIcon = styled(MdMoreVert)`
  font-size: 25px !important;
`;
const AttachIcon = styled(MdAttachFile)`
  font-size: 25px !important;
`;
const SmileIcon = styled(GrEmoji)`
  font-size: 25px !important;
`;
const MicIcon = styled(BsMicFill)`
  font-size: 25px !important;
`;
const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin: 0 15px;
`;
