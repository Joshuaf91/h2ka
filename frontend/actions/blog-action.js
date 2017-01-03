import $ from "jquery";

const getPost = currentPost => ({
  type: 'GET_BLOG',
  data: currentPost,
})



const serverGetPost = () => dispatch => {
  $.ajax({
    url: '/api/post/',
    type: 'GET'
  })
  .done(data => {
    dispatch(getPost(data))
  })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

const makePost = (data) => dispatch =>{
  $.ajax({
    url: '/api/post/',
    type: 'POST',
    data: data
  })
  // .done(data => {
  //   serverGetPost();
  // })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}




export default  {
  serverGetPost,
  makePost,
}