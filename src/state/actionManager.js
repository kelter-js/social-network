class Actions {
  #actionTypes;

  constructor() {
    this.createActionAddPost = this.createActionAddPost.bind(this);
    this.createActionChangeTextPost = this.createActionChangeTextPost.bind(this);
    this.createActionChangeTextMessage = this.createActionChangeTextMessage.bind(this);
    this.createActionChangeCurrentHeader = this.createActionChangeCurrentHeader.bind(this);
    this.createActionChangeLikeState = this.createActionChangeLikeState.bind(this);
    this.createActionMessage = this.createActionMessage.bind(this);

    this.#actionTypes = {
      'post': 'ADD-POST',
      'messageText': 'CHANGE-TEXT-MESSAGE',
      'postText': 'CHANGE-TEXT-POST',
      'message': 'ADD-MESSAGE',
      'changeLikeState': 'CHANGE_LIKE_STATE',
      'header': 'CHANGE_HEADER',
    }
  }

  createActionAddPost() {
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

  createActionChangeCurrentHeader(text) {
    return {
      'type': this.#actionTypes.header,
      'text': text,
    }
  }

  createActionChangeLikeState(postId) {
    return {
      'type': this.#actionTypes.changeLikeState,
      'postId': postId,
    }
  }

  createActionMessage(userId) {
    return {
      'type': this.#actionTypes.message,
      'user': userId,
    }
  }
}

const actionManager = new Actions();

export { actionManager }
