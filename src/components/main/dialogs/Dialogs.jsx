import { Route, Switch } from 'react-router-dom';

import DialogList from './DialogList';
import Message from './MessageContainer';

const Dialogs = ({ chat }) => {
  const messagesList = Object
    .entries(chat.messages)
    .map((message, index) => {
      return (
        <Route
          key={index}
          path={`/messages/${message[0].split(' ').join('')}`}
          render={() =>
            <Message
              messages={message[1]}
              currentDialog={message[0]}
            />
          }
        />
      );
    });

  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={chat.dialogs} />

      <Switch>
        {messagesList}
      </Switch>
    </div>
  );
}

export default Dialogs;
