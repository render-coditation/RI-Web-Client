export const getValueFromStorage = (key: string) => window.localStorage.getItem(key)

export const storeValueInStorage = (key: string, value: string) =>
  window.localStorage.setItem(key, value)

export const removeValueFromStorage = (key: string) => window.localStorage.removeItem(key)
