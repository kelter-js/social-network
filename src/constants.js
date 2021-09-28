import { createProfileData } from './service.js'

class Constants {

  static #defaultMenu = [
    'profile',
    'messages',
    'news',
    'music',
  ];

  static #defaultMenuPaths = {
    [this.#defaultMenu[0]]: `/${this.#defaultMenu[0]}`,
    [this.#defaultMenu[1]]: `/${this.#defaultMenu[1]}`,
    [this.#defaultMenu[2]]: `/${this.#defaultMenu[2]}`,
    [this.#defaultMenu[3]]: `/${this.#defaultMenu[3]}`,
    'settings': `/settings`,
  };

  static #defaultProfile = [
    '2 january',
    'Minsk',
    'BSU 11',
    'smth-else.com',
  ];

  static #headers = {
    'profile': 'Профиль пользователя',
    'messages': 'Диалоги пользователя',
    'news': 'Новостная лента',
    'music': 'Музыка пользователя',
    'settings': 'Настройки профиля',
  }

  static #chat = {
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
  }

  static #pageContent = {
    'defaultText': '...start your message here.',
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
  }

  static get defaultMenu() {
    return this.#defaultMenu;
  }

  static get pageContent() {
    return this.#pageContent;
  }

  static get defaultMenuPaths() {
    return this.#defaultMenuPaths;
  }

  static get headers() {
    return this.#headers;
  }

  static get chat() {
    return this.#chat;
  }

  static get defaultProfile() {
    return this.#defaultProfile;
  }
}

export { Constants }
