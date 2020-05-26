import { SET_POSTS, SET_POST_FORM_IS_OPENED } from '../constants/'

import avatar from '../images/avatar.png'

const INITIAL_STATE = {
  posts: [
    {
      title: '第1篇帖子',
      content: '帖子内容帖子内容帖子内容帖子内容帖子内容帖子内容。',
      user: {
        nickName: '杰西',
        avatar,
      },
    },
  ],
  isOpened: false,
}

export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_POSTS: {
      const { post } = action.payload
      return { ...state, posts: state.posts.concat(post) }
    }

    case SET_POST_FORM_IS_OPENED: {
      const { isOpened } = action.payload

      return { ...state, isOpened }
    }

    default:
      return state
  }
}
