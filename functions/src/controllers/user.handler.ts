import * as functions from 'firebase-functions';
import UserService from '../helpers/user.helper';


/**
 * Handler that implements the logic of creating a firestore user
 * @param name
 * @param email
 * @param userId
 * @param birthDate
 * @returns {User} the created user
 */
export async function handleCreateUserAccount(name: string, email: string, userId: string, birthDate: Date) {
  try {
    const createUserAccountResponse = await UserService.createUserAccount(name, email, userId, birthDate);
    return createUserAccountResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
}