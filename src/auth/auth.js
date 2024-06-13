import api, { setAuthToken } from '../api/api'; // Pastikan jalur impor benar

export const login = async (email, password) => {
  try {
    console.log('Attempting to login with:', { email, password });
    const response = await api.post('/auth/login', { email, password }); // Gunakan /auth/login
    console.log('Response from API:', response);
    if (response.data.access_token) {  // Gunakan access_token
      const { access_token } = response.data;
      setAuthToken(access_token);
      localStorage.setItem('token', access_token);
      return access_token;
    } else {
      throw new Error('No token found in response');
    }
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
