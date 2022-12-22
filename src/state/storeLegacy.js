import { createProfileData, InputHandlers } from '../service';
import { reduceHandler } from './reducers';
import { actionManager } from './actions';

class Store {
  #state;
  #defaultProfile;
  #headers;

  constructor() {
    this.dispatch = this.dispatch.bind(this);

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
      'actionManager': actionManager,
    }
  }

  _getCurrentHeader() {
    const location = window.location.href;

    if (location.split('/').includes('messages')) {
      return this.#headers.messages;
    }

    return this.#headers[location.split('/')[location.split('/').length - 1]];
  }

  dispatch(action) {
    this.#state = reduceHandler(this.#state, action, this.#headers);
    this._callSubscriber(this);
  }

  _callSubscriber() {
    console.log('There`s no currently available subscribers');
  }

  observer(subscriber) {
    this._callSubscriber = subscriber;
  }

  getState() {
    return this.#state;
  }
}

const store = new Store();

export { store }
