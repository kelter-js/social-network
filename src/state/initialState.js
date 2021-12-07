import { getCurrentHeader } from '../service.js';
import { InputHandlers } from '../service.js';

const headers = {
  profile: 'Профиль пользователя',
  messages: 'Диалоги пользователя',
  news: 'Новостная лента',
  music: 'Музыка пользователя',
  users: 'Пользователи сети',
  settings: 'Настройки профиля',
}

const initialState = {
  defaultMenu: [
    'profile',
    'messages',
    'news',
    'music',
    'users',
  ],
  defaultMenuPaths: {
    profile: '/profile',
    messages: '/messages',
    news: '/news',
    music: '/music',
    users: '/users',
  },
  chat: {
    messages: {
      'Kalashnikov Sergey': [
        {
          text: 'Hi, how are you?',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Hi, im fine, thank you, so what about you?',
          author: 'Kalashnikov Sergey',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Me too, what do you think about to spend the rest of this evening together?',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'That`s cool, lets meet each other 21:30 at my house',
          author: 'Kalashnikov Sergey',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'K, bye',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
      ],
      'Predelnaya Visota': [
        {
          text: 'Template message example 1',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 1',
          author: 'Predelnaya Visota',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 1',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 1',
          author: 'Predelnaya Visota',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 1',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 1',
          author: 'Predelnaya Visota',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
      ],
      'Some Guy': [
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 2',
          author: 'Some Guy',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 2',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
      ],
      'Another One': [
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 3',
          author: 'You',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 3',
          author: 'Another One',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
      ],
      'Russian Caliber': [
        {
          text: 'Template message example 4',
          author: 'Russian Caliber',
          style: {
            author: 'dialogs__author--user',
            'messtexage': 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 4',
          author: 'You',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 4',
          author: 'Russian Caliber',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 4',
          author: 'You',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 4',
          author: 'Russian Caliber',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 4',
          author: 'You',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 4',
          author: 'Russian Caliber',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 4',
          author: 'You',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
        {
          text: 'Template message example 4',
          author: 'Russian Caliber',
          style: {
            author: 'dialogs__author--user',
            message: 'dialogs__phrase--user',
          },
        },
        {
          text: 'Template message example 4',
          author: 'You',
          style: {
            author: 'dialogs__author--responder',
            message: 'dialogs__phrase--responder',
          },
        },
      ],
    },
    dialogs: [
      'Kalashnikov Sergey',
      'Predelnaya Visota',
      'Some Guy',
      'Another One',
      'Russian Caliber',
    ],
    messageInfo: 'New message text...',
    defaultText: '...Start your message here!',
    currentText: undefined,
    eventType: 'chat',
  },
  users: {
    userList: [],
    header: 'Users',
    allUsersDisplayed: false,
    defaultStatus: 'This user didn`t set any status.',
    defaultProfilePicture: 'https://source.unsplash.com/random',
    pageSize: 10,
    totalPagesAmount: 0,
    isLoading: true,
    jumpToPageText: 'Jump!',
    firstPage: 1,
    currentPage: 1,
    jumpToPage: '',
    maxJumpIndexAttention: false,
    maxJumpLengthText: 'Max search input length is: ',
    defaultLocations: [
      {
        'countryName': 'Belarus',
        'cityName': 'Minsk',
      },
      {
        'countryName': 'Belarus',
        'cityName': 'Minsk',
      },
      {
        'countryName': 'Ukraine',
        'cityName': 'Kiev',
      },
      {
        'countryName': 'United States',
        'cityName': 'Philadelphia',
      },
      {
        'countryName': 'Russia',
        'cityName': 'Chelyabinsk',
      },
      {
        'countryName': 'United States',
        'cityName': 'Texas',
      },
      {
        'countryName': 'Russia',
        'cityName': 'Kransnoyarks',
      },
      {
        'countryName': 'Russia',
        'cityName': 'Kirov',
      },
    ],
    follow: 'Follow',
    unfollow: 'Unfollow',
  },
  pageContent: {
    settingsButton: 'settings',
    eventType: 'pageContent',
    mainHeader: 'Социальная сеть ВРеакте',
    defaultText: '...start your message here.',
    currentText: undefined,
    headers: headers,
    feedDefaultText: 'Share news with your friends!',
    sendPost: 'Send new post!',
    feed: [
      {
        post: 'Hey, is there anybody?',
        likes: 15,
        liked: false,
      },
      {
        post: 'Sup guize, is something really happening here?',
        likes: 20,
        liked: false,
      },
    ],
    userData: {
      mainAvatar: '/img/default-background.jpg',
      profileAvatar: '/img/default-profile.jpg',
      userData: {
        'Date of Birth': '2 january',
        'City': 'Minsk',
        'Education': 'BSU 11',
        'Web Site': 'smth-else.com',
      },
      userName: 'John Doe',
    },
    currentHeader: getCurrentHeader(headers),
  },
  handlers: InputHandlers,
}

export { initialState }
