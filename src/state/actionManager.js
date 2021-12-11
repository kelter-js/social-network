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
      'setUserProfile': 'SET_USER_PROFILE',
    }
  }

  addPost = () => {
    return {
      'type': this.#actionTypes.post,
    }
  }

  setLoadingState = (state) => {
    return {
      'type': this.#actionTypes.setLoadingState,
      'state': state,
    }
  }

  updateMaxJumpIndexAttention = (attentionStatus) => {
    return {
      'type': this.#actionTypes.updateMaxJumpIndexAttention,
      'status': attentionStatus,
    }
  }

  updateJumpPage = (pageIndex) => {
    return {
      'type': this.#actionTypes.setJumpPage,
      'pageIndex': pageIndex,
    }
  }

  setUsers = (userList) => {
    return {
      'type': this.#actionTypes.setUsers,
      'userList': userList,
    }
  }

  clearUsers = () => {
    return {
      'type': this.#actionTypes.clearUsers,
    }
  }

  setTotalUsersCount = (pagesAmount) => {
    return {
      'type': this.#actionTypes.setUsersCount,
      'pagesAmount': pagesAmount,
    }
  }

  setCurrentPage = (currentPage) => {
    return {
      'type': this.#actionTypes.setCurrentPage,
      'currentPage': currentPage,
    }
  }

  toggleFollow = (id) => {
    return {
      'type': this.#actionTypes.toggleFollow,
      'id': id,
    }
  }

  changeText = (text, receiver) => {
    return {
      'type': this.#actionTypes.changeText,
      'text': text,
      'receiver': receiver,
    }
  }

  updateHeader = (text) => {
    return {
      'type': this.#actionTypes.header,
      'text': text,
    }
  }

  changeLikeState = (postId) => {
    return {
      'type': this.#actionTypes.changeLikeState,
      'postId': postId,
    }
  }

  addMessage = (userId) => {
    return {
      'type': this.#actionTypes.message,
      'user': userId,
    }
  }

  setUserProfile = (user) => {
    return {
      'type': this.#actionTypes.setUserProfile,
      'user': user,
    }
  }
}

export const {
  updateHeader,
  addPost,
  setLoadingState,
  updateMaxJumpIndexAttention,
  updateJumpPage,
  setUsers,
  clearUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleFollow,
  changeText,
  changeLikeState,
  addMessage,
  setUserProfile,
} = new Actions();
