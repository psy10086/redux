import * as actionTypes from './actionType';

export const createContact = (contact) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact
  }
}

export const removeContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id
  }
}