import { getCurrentHeader } from '../service.js';
import { actionManager } from './actionManager.js';
import { InputHandlers } from '../service.js';

const headers = {
  'profile': 'Профиль пользователя',
  'messages': 'Диалоги пользователя',
  'news': 'Новостная лента',
  'music': 'Музыка пользователя',
  'settings': 'Настройки профиля',
  'users': 'Пользователи сети',
}

//initialState.users.templateUserList временная заглушка, пока нет возможности тянуть данные с сервера

const initialState = {
  'defaultMenu': [
    'profile',
    'messages',
    'news',
    'music',
    'users',
  ],
  'defaultMenuPaths': {
    'profile': '/profile',
    'messages': '/messages',
    'news': '/news',
    'music': '/music',
    'settings': '/settings',
    'users': '/users',
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
  'users': {
    'userList': [],
    'header': 'Пользователи',
    'showMoreButtonText': 'Показать больше',
    'templateUserList': [
      {
        'isFollowed': false,
        'name': 'Dmitriy K.',
        'status': 'I am looking for a job now',
        'countryName': 'Belarus',
        'cityName': 'Minsk',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': false,
        'name': 'Svetlana D.',
        'status': 'Im so pretty',
        'countryName': 'Belarus',
        'cityName': 'Minsk',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': true,
        'name': 'Sergei S.',
        'status': 'I like football!!!',
        'countryName': 'Ukraine',
        'cityName': 'Kiev',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': false,
        'name': 'Andrew T.',
        'status': 'Im free to help you to create good video production',
        'countryName': 'United States',
        'cityName': 'Philadelphia',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },

      {
        'isFollowed': true,
        'name': 'Alina T.',
        'status': 'Im professional masseur',
        'countryName': 'Russia',
        'cityName': 'Chelyabinsk',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': true,
        'name': 'Lucker M.',
        'status': 'Im good at extreme vocal',
        'countryName': 'United States',
        'cityName': 'Texas',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': false,
        'name': 'Anatoliy L.',
        'status': 'Good electronics engineer',
        'countryName': 'Russia',
        'cityName': 'Kransnoyarks',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },
      {
        'isFollowed': false,
        'name': 'Okunev I.',
        'status': 'Im lawyer with over 100 court victories!',
        'countryName': 'Russia',
        'cityName': 'Kirov',
        'profilePicture': 'https://source.unsplash.com/random',
        'pictureAlt': 'Изображение пользователя',
      },

    ],
    'minLoadingAmount': 4,
    'currentLoadingAmount': 4,
    'follow': 'Подписаться',
    'unfollow': 'Отписаться',
  },
  'pageContent': {
    'settingsButton': 'settings',
    'mainHeader': 'Социальная сеть ВРеакте',
    'defaultText': '...start your message here.',
    'currentText': undefined,
    'headers': headers,
    'feed': [
      {
        'post': 'Hey, is there anybody?',
        'likes': 15,
        'liked': false,
      },
      {
        'post': 'Sup guize, is something really happening here?',
        'likes': 20,
        'liked': false,
      },
    ],
    'userData': {
      'mainAvatar': '/img/default-background.jpg',
      'profileAvatar': '/img/default-profile.jpg',
      'userData': {
        'Date of Birth': '2 january',
        'City': 'Minsk',
        'Education': 'BSU 11',
        'Web Site': 'smth-else.com',
      },
      'userName': 'John Doe',
    },
    'currentHeader': getCurrentHeader(headers),
  },
  'handlers': InputHandlers,
  'actionManager': actionManager,
}

export { initialState }
