# Référence API Cloudinary

## Installation

```bash
npm install cloudinary
```

## Configuration SDK (Node.js)

```javascript
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
```

Variable d'environnement alternative (tout-en-un) :
```
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

## URL de delivery

Format de base :
```
https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{public_id}.{format}
```

Exemple :
```
https://res.cloudinary.com/Root/image/upload/w_300,h_300,c_fill/sample.jpg
```

## Paramètres de transformation (URL)

| Paramètre | Code URL | Exemples |
|-----------|----------|----------|
| Width | `w_` | `w_300`, `w_auto` |
| Height | `h_` | `h_200` |
| Crop | `c_` | `c_fill`, `c_fit`, `c_limit`, `c_scale`, `c_crop`, `c_thumb`, `c_pad` |
| Gravity | `g_` | `g_face`, `g_center`, `g_auto` |
| Quality | `q_` | `q_auto`, `q_auto:good`, `q_80` |
| Format | `f_` | `f_auto`, `f_webp`, `f_avif` |
| Effect | `e_` | `e_blur:300`, `e_grayscale`, `e_improve` |
| Radius | `r_` | `r_20`, `r_max` (cercle) |
| DPR | `dpr_` | `dpr_auto`, `dpr_2.0` |
| Fetch format | `f_` | `f_auto` (choix auto webp/avif) |

### Transformations chaînées

Séparer par `/` pour enchaîner :
```
/w_800,c_limit/q_auto,f_auto/sample.jpg
```

## Upload (Node.js)

### Upload simple
```javascript
const result = await cloudinary.uploader.upload('path/to/image.jpg', {
  public_id: 'mon_image',
  folder: 'mon_dossier',
  resource_type: 'auto'
});
```

### Upload avec transformation
```javascript
const result = await cloudinary.uploader.upload('image.jpg', {
  public_id: 'mon_image',
  transformation: [
    { width: 800, crop: 'limit' },
    { quality: 'auto', fetch_format: 'auto' }
  ]
});
```

### Upload non signé (côté client)
```javascript
cloudinary.uploader.unsigned_upload('image.jpg', 'upload_preset_name');
```

## Génération d'URL via SDK

```javascript
const url = cloudinary.url('public_id', {
  transformation: [
    { width: 300, height: 300, crop: 'fill', gravity: 'face' },
    { quality: 'auto', fetch_format: 'auto' }
  ]
});
```

## Optimisation recommandée pour le web

Toujours ajouter ces paramètres pour la performance :
```
q_auto,f_auto
```
- `q_auto` : compression intelligente selon le contenu
- `f_auto` : sert WebP/AVIF selon le navigateur

## Types de ressources

- `image` — images (défaut)
- `video` — vidéos
- `raw` — fichiers bruts (PDF, etc.)
- `auto` — détection automatique

## API Admin utiles

```javascript
// Lister les assets d'un dossier
const result = await cloudinary.api.resources({ type: 'upload', prefix: 'dossier/', max_results: 50 });

// Détails d'un asset
const result = await cloudinary.api.resource('public_id');

// Supprimer un asset
const result = await cloudinary.uploader.destroy('public_id');
```

## Sécurité — Règles projet

- **JAMAIS** exposer `CLOUDINARY_API_SECRET` côté client/front
- Les uploads côté client doivent utiliser des **upload presets non signés** ou des **signatures générées côté serveur**
- Les transformations via URL sont publiques et ne nécessitent pas d'authentification
