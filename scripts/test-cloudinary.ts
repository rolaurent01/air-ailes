import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: 'dxiejikxc',
  api_key: '818427291483744',
  api_secret: 'Osafgbb7-TU01uzhZ3u30g8a0do',
});
cloudinary.api.ping()
  .then(() => console.log('✓ Connexion OK'))
  .catch((e: any) => console.log('✗', e.error?.message ?? e.message));
