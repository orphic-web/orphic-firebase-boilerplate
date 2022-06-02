import * as functions from 'firebase-functions';
import UserService from '../helpers/user.helper';
import SupportedLanguages from '../models/enums/SupportedLanguages';

/**
 * Handler that implements the logic of creating a firestore user
 *
 * @param {string} id
 * @param {string} email
 * @param {string} name
 * @param {SupportedLanguages} language
 * @returns {FirebaseFirestore.WriteResult} Write result
 */
export async function handleCreateUserAccount(id: string, email: string, name: string, language: SupportedLanguages) {
  try {
    const createUserAccountResponse = await UserService.createUserAccount(id, email, name, language);
    return createUserAccountResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
}

/**
 * Handler that checks if user is a SuperAdmin
 *
 * @param {string} id
 * @returns {boolean} isSuperAdmin
 */
export async function handleCheckIfSuperAdmin(id: string) {
  try {
    const checkIfSuperAdminResponse = await UserService.checkIfSuperAdminResponse(id);
    return checkIfSuperAdminResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
}

/**
 * Handler that implements the logic of deleting a firestore user
 *
 * @param {string} id
 * @returns {FirebaseFirestore.WriteResult} Write result
 */
export async function handleDeleteUser(id: string) {
  try {
    const deleteUserResponse = await UserService.deleteUser(id);
    return deleteUserResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
}

/**
 * Handler that implement the logic of fetching a user by id
 *
 * @param {string} id
 * @returns {User} user
 */
export async function handleGetUserById(id: string) {
  try {
    const getUserResponse = await UserService.getUserById(id);
    return getUserResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
}
