import * as functions from 'firebase-functions';

import {
  handleCheckIfSuperAdmin,
  handleCreateUserAccount,
} from '../controllers/user.handler';
import ErrorCodes from '../models/enums/ErrorCodes';
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

/**
 * API endpoint that checks if the request user is admin
 * @returns {boolean} Is super admin or not
 */
exports.checkIfSuperAdmin = functions.region('us-central1').https.onCall(async (data: any, context: any) => {
  try {
    // Permission - Checks if the request comes from an authenticated user
    if (!context.auth) throw new functions.https.HttpsError(ErrorCodes.PERMISSION_DENIED, 'Permission denied');
    const handleCheckIfSuperAdminResponse = await handleCheckIfSuperAdmin(context.auth.uid);
    return handleCheckIfSuperAdminResponse;
  } catch (e) {
    const error: any = e;
    throw new functions.https.HttpsError(error.code, error.message);
  }
});
