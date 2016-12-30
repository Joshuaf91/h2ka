const blog = (state = null, action) => {
  switch (action.type) {
  	case "GET_BLOG":
  		return action.data
    default:
    	return state
  }
}

export default blog;