/**
 * @desc TypeChecker that verify the format of a user Object
 * @param {user: User}
 * @returns {user: User}
 */

// export function isUser(user: User) {
//   try {
//     if (!user) throw new functions.https.HttpsError(ErrorCodes.INVALID_ARGUMENT, 'Invalid argument : user is undefined.');

//     const newUser = {
//       userId: isString('userId', user.userId),
//       email: isString('email', user.email),
//       name: isString('name', user.name),
//       avatarPath: isString('avatarPath', user.avatarPath),
//       userType: isString('userType', user.userType),
//       familyId: isString('familyId', user.familyId),
//       consecutiveGamingTimer: isNumber('consecutiveGamingTimer', user.consecutiveGamingTimer),
//       weeklyGamingTimer: isNumber('weeklyGamingTimer', user.weeklyGamingTimer),
//       weeklySportTimer: isNumber('weeklySportTimer', user.weeklySportTimer),
//       birthDate: isStringDate('birthDate', user.birthDate),
//       activeEntryId: isString('activeEntryId', user.activeEntryId),
//       stripeCustomer: isStripeCustomer(user.stripeCustomer),
//       language: isString('language', user.language),
//     };
//     return newUser;
//   } catch (e) {
//     const error: any = e;
//     throw new functions.https.HttpsError(error.code, error.message);
//   }
// }
