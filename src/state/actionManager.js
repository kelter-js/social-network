class Actions {
  #actionTypes;

  constructor() {
    this.createActionPost = this.createActionPost.bind(this);
    this.createActionChangeTextPost = this.createActionChangeTextPost.bind(this);
    this.createActionChangeTextMessage = this.createActionChangeTextMessage.bind(this);
    this.createActionChangeCurrentHeader = this.createActionChangeCurrentHeader.bind(this);
    this.createActionChangeLike = this.createActionChangeLike.bind(this);
    this.createActionMessage = this.createActionMessage.bind(this);

    this.#actionTypes = {
      'post': 'ADD-POST',
      'messageText': 'CHANGE-TEXT-MESSAGE',
      'postText': 'CHANGE-TEXT-POST',
      'message': 'ADD-MESSAGE',
      'like': 'LIKE',
      'dislike': 'DISLIKE',
      'header': 'CHANGE_HEADER',
    }
  }

  createActionPost() {
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

  createActionChangeLike(postLiked, postId) {
    return {
      'type': postLiked ? this.#actionTypes.dislike : this.#actionTypes.like,
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
