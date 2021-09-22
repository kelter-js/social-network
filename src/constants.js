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
    'smth-else.com'
  ];

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

  static get defaultMenu () {
    return this.#defaultMenu;
  }

  static get defaultFeed () {
    return this.#defaultFeed;
  }

  static get defaultProfile () {
    return this.#defaultProfile;
  }

  static get defaultMainAvatar () {
    return this.#defaultMainAvatar;
  }

  static get defaultProfileAvatar () {
    return this.#defaultProfileAvatar;
  }

  static get defaultProfileName () {
    return this.#defaultProfileName;
  }
}

export { Constants }
