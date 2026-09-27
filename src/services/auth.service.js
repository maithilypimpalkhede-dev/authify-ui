import apiClient from '../config/api.config';

const BASE_URLS = '/api/v1';

export const postLogin = async (payload) => {
  try {
    return await apiClient.post(`${BASE_URLS}/login`, payload);
  } catch (error) {
    const message =
      error.response?.data?.message || 'Login failed. Please try again.';

    throw new Error(message);
  }
};

export const postRegister = async (payload) => {
  try {
    return await apiClient.post(`${BASE_URLS}/register`, payload);
  } catch (error) {
    const message =
      error.response?.data?.message || 'Login failed. Please try again.';

    throw new Error(message);
  }
};


// export const getProfile = async () => {
//   try {
//     return await apiClient.get(BASE_URLS);
//   } catch (error) {
//     const message =
//       error.response?.data?.message || 'Failed to fetch profile.';

//     throw new Error(message);
//   }
// };

// export const putProfile = async (payload) => {
//   try {
//     return await apiClient.put(BASE_URLS, payload);
//   } catch (error) {
//     const message =
//       error.response?.data?.message || 'Failed to update profile.';

//     throw new Error(message);
//   }
// };

export const resetPassword = async (payload) => {
  try {
    return await apiClient.patch(`${BASE_URLS}/reset-password`, payload);
  } catch (error) {
    const message =
      error.response?.data?.message || 'Failed to update profile.';

    throw new Error(message);
  }
};

export const resetOTP = async (payload) => {
  try {
    return await apiClient.patch(`${BASE_URLS}/send-reset-otp`, payload);
  } catch (error) {
    const message =
      error.response?.data?.message || 'Failed to update profile.';

    throw new Error(message);
  }
};

// export const deleteAccount = async (id) => {
//   try {
//     return await apiClient.get(`${BASE_URLS}/delete`, id);
//   } catch (error) {
//     const message =
//       error.response?.data?.message || 'Failed to fetch profile.';

//     throw new Error(message);
//   }
// };