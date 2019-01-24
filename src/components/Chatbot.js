import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class ChatbotPage extends React.Component {
  render () {
    return (
      <MessengerCustomerChat
        pageId="167161029972460"
        appId="1678638095724206"
        greetingDialogDisplay="fade"
      />
    );
  }
}

export default ChatbotPage;