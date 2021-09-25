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

  static #defaultMessages = {
    [this.#defaultDialogs[0]]: [
      'Hi, how are you?',
      'Hi, im fine, thank you, so what about you?',
      'Me too, what do you think about to spend the rest of this evening together?',
      'That`s cool, lets meet each other 21:30 at my house',
      'K, bye',
    ],
    [this.#defaultDialogs[1]]: [
      'Template message example 1',
      'Template message example 1',
      'Template message example 1',
      'Template message example 1',
      'Template message example 1',
    ],
    [this.#defaultDialogs[2]]: [
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
      'Template message example 2',
    ],
    [this.#defaultDialogs[3]]: [
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
      'Template message example 3',
    ],
    [this.#defaultDialogs[4]]: [
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
      'Template message example 4',
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

  static #defaultProfileName = 'John Doe';

  static get defaultMenu() {
    return this.#defaultMenu;
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
