import axios from 'axios'

import { GET_CONTACTS } from './types'
// import gC from '../../constants'

/* GET CONTACTS */
export const fetchContacts = () => {
  return dispatch => {
    return axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `contacts.json`
    })
      .then(response => {
        dispatch(createContactsSuccess(response.data))
        return response.data
      })
      .catch(error => {
        console.log('GET_CONTACTS error:', error)
      })
  }
}

export const createContactsSuccess = data => {
  return {
    type: GET_CONTACTS,
    payload: {
      contacts: data.collection
    }
  }
}
/* ********** */
