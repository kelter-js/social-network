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
    profile: '/profile/:userId?',
    messages: '/messages',
    news: '/news',
    music: '/music',
    users: '/users',
    login: '/login',
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
    minPathLength: 2,
    lookingForJobTitle: {
      yes: 'This user currently looking for some job.',
      no: 'This user don`t look for any kind of job.',
    },
    defaultAnnotations: {
      userInfo: 'Some information about user:',
      skills: 'Current user skills:',
      contacts: 'User profile external links:',
    },
    defaultTemplates: {
      skills: 'This user decided to not share his information abouts skills',
      aboutMe: 'This user decided to not share any information',
      contacts: 'This user decided to not share any kind of link',
    },
    feedDefaultText: 'Share news with your friends!',
    sendPost: 'Send new post!',
    currentUser: {},
    jobIcons: {
      lookingForJobIcon: '/img/lookingForJob.png',
      dontLookForJobIcon: '/img/dontLookForJob.png',
    },
    defaultUser: {
      photos: {
        small: '/img/default-profile.jpg',
        large: '/img/default-background.jpg',
      },
      aboutMe: 'User information',
      contacts: [
        [
          "facebook",
          1
        ],
        [
          "website",
          1
        ],
        [
          "vk",
          1
        ],
        [
          "twitter",
          1
        ],
        [
          "instagram",
          1
        ],
        [
          "youtube",
          1
        ],
        [
          "github",
          1
        ],
        [
          "mainLink",
          1
        ]
      ],
      lookingForAJob: false,
      lookingForAJobDescription: 'About your skillz',
      fullName: 'John Doe',
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
      ]
    },
    currentHeader: getCurrentHeader(headers),
  },
  userData: {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
    status: "",
  },
  loginData: {
    password: "",
    email: "",
  },
  isLoading: false,
  handlers: InputHandlers,
}

export { initialState }
