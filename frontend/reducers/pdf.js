const user = (state = false, action) => {
  switch (action.type) {
  	case "GET_PDF":
  		return action.data
    default:
    	return state
  }
}

export default user;