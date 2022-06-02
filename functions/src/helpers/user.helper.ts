import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import User from '../models/User';
import SupportedLanguages from '../models/enums/SupportedLanguages';
import ErrorCodes from '../models/enums/ErrorCodes';

export default class UserService {
  /**
   * Helper that creates a user to firestore
   *
   * @param {string} name
   * @param {string} email
   * @param {string} userId
   * @param {SupportedLanguages} language
   * @returns {FirebaseFirestore.WriteResult} Write result
   */
  static async createUserAccount(id: string, email: string, name: string, language: SupportedLanguages) {
    try {
      const user: User = {
        id,
        email,
        name,
        language,
      };
      const userRef = await admin.firestore().collection('Users').doc(user.id);
      await userRef.set(user);
      return userRef;
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }

  /**
   * Helper that checks if the specified user.id is a super admin
   *
   * @param {string} id
   * @returns {boolean} isSuperAdmin
   */
  static async checkIfSuperAdminResponse(id: string) {
    try {
      const snapshot = await admin.firestore().collection('SuperAdmins').doc(id).get();
      if (snapshot.data()) return true;
      return false;
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }

  /**
   * Helper that deletes a user firestore data
   *
   * @param {string} id
   * @returns {FirebaseFirestore.WriteResult} write result
   */
  static async deleteUser(id: string) {
    try {
      return admin.firestore().collection('Users').doc(id).delete();
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }

  /**
   * Helper that fetches a user by id
   *
   * @param {string} id
   * @returns {User} user
   */
  static async getUserById(id: string) {
    try {
      const snapshot = await admin.firestore().collection('Users').doc(id).get();

      if (!snapshot.exists) throw new functions.https.HttpsError(ErrorCodes.NOT_FOUND, 'User could not be found.');
      const user = snapshot.data() as User;

      if (!user) throw new functions.https.HttpsError(ErrorCodes.NOT_FOUND, 'User could not be found.');
      return user;
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }
}
