import { GET_CONTACTS } from '../actions/types'

const initialState = {
  contacts: []
}

const contacts = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload.contacts
      }
    default:
      return state
  }
}

export default contacts
