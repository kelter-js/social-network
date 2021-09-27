class Constants {

  static #defaultMenu = [
    'profile',
    'messages',
    'news',
    'music',
  ];

  static #defaultProfile = [
    '2 january',
    'Minsk',
    'BSU 11',
    'smth-else.com',
  ];

  static #defaultDialogs = [
    'Kalashnikov Sergey',
    'Predelnaya Visota',
    'Some Guy',
    'Another One',
    'Russian Caliber',
  ];

  static #headers = {
    'profile': 'Профиль пользователя',
    'messages': 'Диалоги пользователя',
    'news': 'Новостная лента',
    'music': 'Музыка пользователя',
    'settings': 'Настройки профиля',
  }

  static #defaultMessages = {
    [this.#defaultDialogs[0]]: [
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
        'author': this.#defaultDialogs[0],
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
        'author': this.#defaultDialogs[0],
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
    [this.#defaultDialogs[1]]: [
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
        'author': this.#defaultDialogs[1],
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
        'author': this.#defaultDialogs[1],
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
        'author': this.#defaultDialogs[1],
        'style': {
          'author': 'dialogs__author--responder',
          'message': 'dialogs__phrase--responder',
        },
      },
    ],
    [this.#defaultDialogs[2]]: [
      {
        'text': 'Template message example 2',
        'author': this.#defaultDialogs[2],
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
        'author': this.#defaultDialogs[2],
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
        'author': this.#defaultDialogs[2],
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
        'author': this.#defaultDialogs[2],
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
        'author': this.#defaultDialogs[2],
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
        'author': this.#defaultDialogs[2],
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
    [this.#defaultDialogs[3]]: [
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
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
        'author': this.#defaultDialogs[3],
        'style': {
          'author': 'dialogs__author--responder',
          'message': 'dialogs__phrase--responder',
        },
      },
    ],
    [this.#defaultDialogs[4]]: [
      {
        'text': 'Template message example 4',
        'author': this.#defaultDialogs[4],
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
        'author': this.#defaultDialogs[4],
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
        'author': this.#defaultDialogs[4],
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
        'author': this.#defaultDialogs[4],
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
        'author': this.#defaultDialogs[4],
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
  }

  static #defaultFeed = [
    {
      'post': 'Hey, is there anybody?',
      'likes': 15,
    },
    {
      'post': 'Sup guize, is something really happening here?',
      'likes': 20,
    },
  ];

  static #defaultMainAvatar = '/img/default-background.jpg';
  static #defaultProfileAvatar = '/img/default-profile.jpg';
  static #defaultMessage = '...start your message here.';

  static #defaultProfileName = 'John Doe';

  static get defaultMenu() {
    return this.#defaultMenu;
  }

  static get defaultMessage() {
    return this.#defaultMessage;
  }

  static get headers() {
    return this.#headers;
  }

  static get defaultMessages() {
    return this.#defaultMessages;
  }

  static get defaultFeed() {
    return this.#defaultFeed;
  }

  static get defaultDialogs() {
    return this.#defaultDialogs;
  }

  static get defaultProfile() {
    return this.#defaultProfile;
  }

  static get defaultMainAvatar() {
    return this.#defaultMainAvatar;
  }

  static get defaultProfileAvatar() {
    return this.#defaultProfileAvatar;
  }

  static get defaultProfileName() {
    return this.#defaultProfileName;
  }
}

export { Constants }
