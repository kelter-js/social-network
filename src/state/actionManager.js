class Actions {
  #actionTypes;

  constructor() {
    this.#actionTypes = {
      'post': 'ADD-POST',
      'changeText': 'CHANGE-TEXT',
      'message': 'ADD-MESSAGE',
      'changeLikeState': 'CHANGE_LIKE_STATE',
      'header': 'CHANGE_HEADER',
      'toggleFollow': 'TOGGLE_FOLLOW',
      'setUsers': 'SET_USERS',
      'clearUsers': 'CLEAR_USERS',
      'setUsersCount': 'SET_USERS_COUNT',
      'setCurrentPage': 'SET_CURRENT_PAGE',
      'setJumpPage': 'SET_JUMP_PAGE',
      'updateMaxJumpIndexAttention': 'UPDATE_MAX_JUMP_INDEX_ATTENTION',
      'setLoadingState': 'SET_LOADING_STATE',
    }
  }

  createActionAddPost() {
    return {
      'type': this.#actionTypes.post,
    }
  }

  createActionSetLoadingState(state) {
    return {
      'type': this.#actionTypes.setLoadingState,
      'state': state,
    }
  }

  createActionUpdateMaxJumpIndexAttention(attentionStatus) {
    return {
      'type': this.#actionTypes.updateMaxJumpIndexAttention,
      'status': attentionStatus,
    }
  }

  createActionUpdateJumpPage(pageIndex) {
    return {
      'type': this.#actionTypes.setJumpPage,
      'pageIndex': pageIndex,
    }
  }

  createActionSetUsers(userList) {
    return {
      'type': this.#actionTypes.setUsers,
      'userList': userList,
    }
  }

  createActionClearUsers() {
    return {
      'type': this.#actionTypes.clearUsers,
    }
  }

  createActionSetTotalUsersCount(pagesAmount) {
    return {
      'type': this.#actionTypes.setUsersCount,
      'pagesAmount': pagesAmount,
    }
  }

  createActionSetCurrentPage(currentPage) {
    return {
      'type': this.#actionTypes.setCurrentPage,
      'currentPage': currentPage,
    }
  }

  createActionToggleFollow(id) {
    return {
      'type': this.#actionTypes.toggleFollow,
      'id': id,
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
