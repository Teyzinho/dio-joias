
export function setCookie(key: string, value: string, expirationDays: number) {

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

}

export function getCookie(key: string): string | null {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split('=');
    if (cookieKey === key) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
