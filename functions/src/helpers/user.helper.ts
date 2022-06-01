import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export default class UserService {
  /**
   * Helper that creates a user to firestore
   * @param {string} name
   * @param {string} email
   * @param {string} userId
   * @param {Date} birthDate
   * @returns {User} the created user
   */
  static async createUserAccount(name: string, email: string, userId: string, birthDate: Date) {
    try {
      console.log('create user');
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }

  /**
   * Helper that checks if the specified userId is a super admin
   * @param {string} userId
   * @returns {boolean} super admin or not
   */
  static async checkIfSuperAdminResponse(userId: string) {
    try {
      const snapshot = await admin.firestore().collection('SuperAdmins').doc(userId).get();
      if (snapshot.data()) return true;
      return false;
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }
}
