import axios from 'axios';

// Membuat instance axios
const api = axios.create({
  baseURL: 'http://34.101.96.10:8005/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fungsi untuk mengatur header Authorization
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Fungsi untuk memanggil data aset
export const getAssets = async () => {
  try {
    const response = await api.get('/assets/approved');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch assets:', error);
    throw error;
  }
};

// Fungsi untuk menambahkan aset baru
export const addAsset = async (data) => {
  try {
    const response = await api.post('/assets/', data);
    return response.data;
  } catch (error) {
    console.error('Failed to add asset:', error);
    throw error;
  }
};

// Fungsi untuk mengunggah gambar aset
export const uploadAssetImage = async (id, image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const response = await api.post(`/assets/${id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to upload asset image:', error);
    throw error;
  }
};

export default api;
