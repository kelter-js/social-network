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
      'setUserData': 'SET_USER_DATA',
    }
  }

  addPost = () => {
    return {
      type: this.#actionTypes.post,
    }
  }

  setUserData = (data) => {
    return {
      type: this.#actionTypes.setUserData,
      data,
    }
  }

  setLoadingState = (state) => {
    return {
      type: this.#actionTypes.setLoadingState,
      state,
    }
  }

  updateMaxJumpIndexAttention = (attentionStatus) => {
    return {
      type: this.#actionTypes.updateMaxJumpIndexAttention,
      status: attentionStatus,
    }
  }

  updateJumpPage = (pageIndex) => {
    return {
      type: this.#actionTypes.setJumpPage,
      pageIndex,
    }
  }

  setUsers = (userList) => {
    return {
      type: this.#actionTypes.setUsers,
      userList,
    }
  }

  clearUsers = () => {
    return {
      type: this.#actionTypes.clearUsers,
    }
  }

  setTotalUsersCount = (pagesAmount) => {
    return {
      type: this.#actionTypes.setUsersCount,
      pagesAmount,
    }
  }

  setCurrentPage = (currentPage) => {
    return {
      type: this.#actionTypes.setCurrentPage,
      currentPage,
    }
  }

  switchFollow = (id, follow) => {
    return {
      type: this.#actionTypes.toggleFollow,
      id,
      follow,
    }
  }

  changeText = (text, receiver) => {
    return {
      type: this.#actionTypes.changeText,
      text,
      receiver,
    }
  }

  updateHeader = (text) => {
    return {
      type: this.#actionTypes.header,
      text,
    }
  }

  changeLikeState = (postId) => {
    return {
      type: this.#actionTypes.changeLikeState,
      postId,
    }
  }

  addMessage = (userId) => {
    return {
      type: this.#actionTypes.message,
      user: userId,
    }
  }

  setUserProfile = (user) => {
    return {
      type: this.#actionTypes.setUserProfile,
      user,
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
  switchFollow,
  changeText,
  changeLikeState,
  addMessage,
  setUserProfile,
  setUserData,
} = new Actions();
