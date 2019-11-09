export class RouterHelper {
  public static isAllowedKey = (requestBody, allowedUpdatesKeys) => {
    const updates = Object.keys(requestBody);
    return updates.every(update => allowedUpdatesKeys.includes(update));
  };
}
