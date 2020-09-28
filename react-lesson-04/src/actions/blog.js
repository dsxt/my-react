import actionType from "./actionType";

import { getPosts } from "../api/index";

const startFetchBlogList = () => {
  return {
    type: actionType.START_FETCH_BLOG_LIST,
  };
};

const fetchBlogListSuccess = (payload) => {
  return {
    type: actionType.FETCH_BLOG_LIST_SUCCESS,
    payload,
  };
};

const fetchBlogListFailed = () => {
  return {
    type: actionType.FETCH_BLOG_LIST_FAILED,
  };
};

export const fetchBlogList = () => dispatch => {
  dispatch(startFetchBlogList());
  getPosts()
    .then((res) => {
      if (res.status === 200) {
        dispatch(
          fetchBlogListSuccess({
            list: res.data,
          })
        );
      } else {
        dispatch(fetchBlogListFailed());
      }
    })
    .catch((err) => {
      dispatch(fetchBlogListFailed())
    });
};
