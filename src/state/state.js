import { createProfileData, InputHandlers } from '../service.js';
import { reduceHandler } from './reducers.js';

class Store {
  #state;
  #defaultProfile;
  #actionTypes;
  #headers;

  constructor() {
    this.dispatch = this.dispatch.bind(this);
    this.createActionPost = this.createActionPost.bind(this);
    this.createActionChangeTextPost = this.createActionChangeTextPost.bind(this);
    this.createActionChangeTextMessage = this.createActionChangeTextMessage.bind(this);
    this.createActionChangeLike = this.createActionChangeLike.bind(this);
    this.createActionMessage = this.createActionMessage.bind(this);
    this.changeCurrentHeader = this.changeCurrentHeader.bind(this);

    this.#headers = {
      'profile': 'Профиль пользователя',
      'messages': 'Диалоги пользователя',
      'news': 'Новостная лента',
      'music': 'Музыка пользователя',
      'settings': 'Настройки профиля',
    }

    this.#defaultProfile = [
      '2 january',
      'Minsk',
      'BSU 11',
      'smth-else.com',
    ];

    this.#state = {
      'defaultMenu': [
        'profile',
        'messages',
        'news',
        'music',
      ],
      'defaultMenuPaths': {
        'profile': '/profile',
        'messages': '/messages',
        'news': '/news',
        'music': '/music',
        'settings': '/settings',
      },
      'chat': {
        'messages': {
          'Kalashnikov Sergey': [
            {
              'text': 'Hi, how are you?',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Hi, im fine, thank you, so what about you?',
              'author': 'Kalashnikov Sergey',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Me too, what do you think about to spend the rest of this evening together?',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'That`s cool, lets meet each other 21:30 at my house',
              'author': 'Kalashnikov Sergey',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'K, bye',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
          ],
          'Predelnaya Visota': [
            {
              'text': 'Template message example 1',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 1',
              'author': 'Predelnaya Visota',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 1',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 1',
              'author': 'Predelnaya Visota',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 1',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 1',
              'author': 'Predelnaya Visota',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
          ],
          'Some Guy': [
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'Some Guy',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 2',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
          ],
          'Another One': [
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 3',
              'author': 'Another One',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
          ],
          'Russian Caliber': [
            {
              'text': 'Template message example 4',
              'author': 'Russian Caliber',
              'style': {
                'author': 'dialogs__author--user',
                'messtexage': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'Russian Caliber',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'Russian Caliber',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'Russian Caliber',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'Russian Caliber',
              'style': {
                'author': 'dialogs__author--user',
                'message': 'dialogs__phrase--user',
              },
            },
            {
              'text': 'Template message example 4',
              'author': 'You',
              'style': {
                'author': 'dialogs__author--responder',
                'message': 'dialogs__phrase--responder',
              },
            },
          ],
        },
        'dialogs': [
          'Kalashnikov Sergey',
          'Predelnaya Visota',
          'Some Guy',
          'Another One',
          'Russian Caliber',
        ],
        'defaultText': '...Start your message here!',
        'currentText': undefined,
      },
      'pageContent': {
        'defaultText': '...start your message here.',
        'currentText': undefined,
        'feed': [
          {
            'post': 'Hey, is there anybody?',
            'likes': 15,
          },
          {
            'post': 'Sup guize, is something really happening here?',
            'likes': 20,
          },
        ],
        'userData': {
          'mainAvatar': '/img/default-background.jpg',
          'profileAvatar': '/img/default-profile.jpg',
          'userData': createProfileData(this.#defaultProfile),
          'userName': 'John Doe',
        },
        'currentHeader': this._getCurrentHeader(),
      },
      'handlers': InputHandlers,
    }

    this.#actionTypes = {
      'post': 'ADD-POST',
      'messageText': 'CHANGE-TEXT-MESSAGE',
      'postText': 'CHANGE-TEXT-POST',
      'message': 'ADD-MESSAGE',
      'like': 'LIKE',
      'dislike': 'DISLIKE',
      'header': 'CHANGE_HEADER',
    }
  }

  _getCurrentHeader() {
    const location = window.location.href;

    if (location.split('/').includes('messages')) {
      return this.#headers.messages;
    }

    return this.#headers[location.split('/')[location.split('/').length - 1]];
  }

  createActionPost() {
    return {
      'type': this.#actionTypes.post,
    }
  }

  createActionChangeTextPost(text) {
    return {
      'type': this.#actionTypes.postText,
      'text': text,
    }
  }

  createActionChangeTextMessage(text) {
    return {
      'type': this.#actionTypes.messageText,
      'text': text,
    }
  }

  changeCurrentHeader(text) {
    return {
      'type': this.#actionTypes.header,
      'text': text,
    }
  }

  createActionChangeLike(postLiked, postId) {
    return {
      'type': postLiked ? this.#actionTypes.dislike : this.#actionTypes.like,
      'postId': postId,
    }
  }

  createActionMessage(userId) {
    return {
      'type': this.#actionTypes.message,
      'user': userId,
    }
  }

  dispatch(action) {
    reduceHandler(this.#state, action, this.#headers);
    this._callSubscriber(this);
  }

  _callSubscriber() {
    console.log('There`s no currently available subscribers');
  }

  observer(subscriber) {
    this._callSubscriber = subscriber;
  }

  get store() {
    return this.#state;
  }

  get interaction() {
    return {
      'dispatch': this.dispatch,
      'createActionPost': this.createActionPost,
      'createActionChangeTextMessage': this.createActionChangeTextMessage,
      'createActionChangeTextPost': this.createActionChangeTextPost,
      'createActionChangeLike': this.createActionChangeLike,
      'createActionMessage': this.createActionMessage,
      'changeCurrentHeader': this.changeCurrentHeader,
    }
  }
}

const store = new Store();

export { store }
