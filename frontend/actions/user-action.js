import $ from "jquery";

const getUser = currentUser => ({
  type: 'GET_USER',
  data: currentUser,
})

const getUserServer = (data) => dispatch => {
  $.ajax({
    url: '/api/user/validate',
    type: 'GET',
    data: data,
  })
  .done(data => {
    dispatch(getUser(data));
  })
}

const postUser = (userInfo) => dispatch => {
  console.log(userInfo);
  $.ajax({
    url: '/api/user/validate',
    type: 'POST',
    data: userInfo,
  })
  .done(data => {
    dispatch(getUser(data))
  })
}

const validate = () => (dispatch) => {
  console.log("validate")
  $.ajax({
    url: '/api/user/validate/1',
    type: 'get',
  })
  .done(data=>{
    console.log("asdfasdfas",dispatch)
    dispatch(getUser(data))
  })
}

const signOut = dispatch => dispatch =>{
  dispatch(getUser(null))
}

export default  {
    getUser,
    postUser,
    validate,
}