class Actions {
  #actionTypes;

  constructor() {
    this.createActionAddPost = this.createActionAddPost.bind(this);
    this.createActionChangeText = this.createActionChangeText.bind(this);
    this.createActionChangeCurrentHeader = this.createActionChangeCurrentHeader.bind(this);
    this.createActionChangeLikeState = this.createActionChangeLikeState.bind(this);
    this.createActionMessage = this.createActionMessage.bind(this);

    this.#actionTypes = {
      'post': 'ADD-POST',
      'changeText': 'CHANGE-TEXT',
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

  createActionChangeText(text, receiver) {
    return {
      'type': this.#actionTypes.changeText,
      'text': text,
      'receiver': receiver,
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
