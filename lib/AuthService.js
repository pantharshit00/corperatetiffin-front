import decode from 'jwt-decode';

export const setTokensToLocalStorage = (token, refreshToken) => {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
};

export const getTokensFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  return { token, refreshToken };
};

export const getUserInfoFromToken = () => {
  try {
    const { token } = getTokensFromLocalStorage();
    const userDetails = decode(token);
    return userDetails;
  } catch (e) {
    return null;
  }
};

export const isLoggedIn = () => {
  const { refreshToken, token } = getTokensFromLocalStorage();
  if (refreshToken && token) {
    return true;
  }
  return false;
};
