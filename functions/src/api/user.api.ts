import * as functions from 'firebase-functions';

import {
  handleCreateUserAccount,
} from '../controllers/user.handler';
import { isString, isStringDate } from '../TypeCheckers/primitiveType';

/**
 * API endpoint that creates a user account to firestore
 * @param {string} name
 * @param {string} email
 * @param {string} userId
 * @param {Date} birthDate
 * @returns {User} the created user
 */
exports.createUserAccount = functions.region('us-central1').https.onCall(async (data: any, context: any) => {
  try {
    const name = isString('name', data.name);
    const email = isString('email', data.email);
    const userId = isString('userID', data.userId);
    const birthDate = isStringDate('birthDate', data.birthDate);

    const handleCreateUserAccountResponse = await handleCreateUserAccount(name, email, userId, birthDate);
    return handleCreateUserAccountResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
});