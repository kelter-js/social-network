import { createProfileData, InputHandlers } from './service.js'

class Store {
  #state;
  #defaultProfile;
  #actions;
  #receivers;
  #actionTypes;

  constructor () {
    this.dispatch = this.dispatch.bind(this);
    this.createActionPost = this.createActionPost.bind(this);
    this.createActionChangeText = this.createActionChangeText.bind(this);
    this.createActionChangeLike = this.createActionChangeLike.bind(this);
    this.createActionMessage = this.createActionMessage.bind(this);

    this.#receivers = {
      'post': (text) => this.#state.pageContent.currentText = text,
      'message': (text) => this.#state.chat.currentText = text,
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
      'headers': {
        'profile': 'Профиль пользователя',
        'messages': 'Диалоги пользователя',
        'news': 'Новостная лента',
        'music': 'Музыка пользователя',
        'settings': 'Настройки профиля',
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
      },
      'handlers': InputHandlers,
    }

    this.#actionTypes = {
      'post': 'ADD-POST',
      'text': 'CHANGE-TEXT',
      'message': 'ADD-MESSAGE',
      'like': 'LIKE',
      'dislike': 'DISLIKE',
    }

    this.#actions = {
      'ADD-POST': () => {
        this.#state.pageContent.feed.push(this._createPost(this.#state.pageContent.currentText));
        this.#state.pageContent.currentText = undefined;
        this._callSubscriber(this);
      },
      'CHANGE-TEXT': (newText) => {
        this.#receivers[newText.receiver](newText.text);
        this._callSubscriber(this);
      },
      'ADD-MESSAGE': (messageInfo) => {
        this.#state.chat.messages[messageInfo.user].push(this._createMessage(this.#state.chat.currentText));
        this.#state.chat.currentText = undefined;
        this._callSubscriber(this);
      },
      'LIKE': (post) => {
        ++this.#state.pageContent.feed[post.postId].likes;
        this._callSubscriber(this);
      },
      'DISLIKE': (post) => {
        --this.#state.pageContent.feed[post.postId].likes;
        this._callSubscriber(this);
      },
    }
  }

  createActionPost () {
    return {
      'type': this.#actionTypes.post,
    }
  }

  createActionChangeText (text, receiver) {
    return {
      'type': this.#actionTypes.text,
      'receiver': receiver,
      'text': text,
    }
  }

  createActionChangeLike (postLiked, postId) {
    return {
      'type': postLiked ? this.#actionTypes.dislike : this.#actionTypes.like,
      'postId': postId,
    }
  }

  createActionMessage (userId) {
    return {
      'type': this.#actionTypes.message,
      'user': userId,
    }
  }

  _createPost (text) {
    return {
      'post': text,
      'likes': 35,
    }
  }

  _createMessage (text) {
    return {
      'text': text,
      'author': 'You',
      'style': {
        'author': 'dialogs__author--user',
        'message': 'dialogs__phrase--user',
      },
    }
  }

  dispatch (action) {
    this.#actions[action.type](action);
  }

  _callSubscriber () {
    console.log('There`s no currently available subscribers');
  }

  observer (subscriber) {
    this._callSubscriber = subscriber;
  }

  get store () {
    return this.#state;
  }

  get interaction () {
    return {
      'dispatch': this.dispatch,
      'createActionPost': this.createActionPost,
      'createActionChangeText': this.createActionChangeText,
      'createActionChangeLike': this.createActionChangeLike,
      'createActionMessage': this.createActionMessage,
    }
  }
}

const store = new Store();

export { store }
