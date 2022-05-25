import * as functions from 'firebase-functions';

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
      console.log('create user')
    } catch (e) {
      const error: any = e;
      throw new functions.https.HttpsError(error.code, error.message);
    }
  }
}