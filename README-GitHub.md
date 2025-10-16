# 🚀 Electro Satellite Tunisie - Plateforme E-Commerce Révolutionnaire

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=for-the-badge&logo=framer)](https://framer.com/motion/)

> **🌟 Plateforme e-commerce révolutionnaire avec architecture multi-tenant, gestion intelligente des produits digitaux et physiques, et système de commissions automatiques multi-niveaux.**

## ✨ Fonctionnalités Révolutionnaires

### 🏗️ **Architecture Multi-Tenant Ultra-Puissante**
- ✅ **Isolation complète** des données par tenant
- ✅ **5 rôles utilisateurs** (Super Admin, Admin, Revendeur, Client, Guest)
- ✅ **Gestion centralisée** avec analytics globales
- ✅ **Scalabilité infinie** pour l'expansion internationale

### 📦 **Gestion Intelligente des Produits**
- ✅ **Produits digitaux** : IPTV, Streaming, Licences, Cours
- ✅ **Produits physiques** : Box Android, Accessoires, Matériel
- ✅ **Produits mixtes** : Packs complets (digital + physique)
- ✅ **Gestion du stock** automatique et intelligente

### 💰 **Système de Commissions Révolutionnaire**
- ✅ **5 niveaux de commissions** (Bronze à Diamond : 5% à 20%)
- ✅ **Calculs automatiques** multi-niveaux
- ✅ **Bonus intelligents** : Nouveau client, Volume, Fidélité, Digital
- ✅ **Rapports détaillés** et analytics avancées

### 🎛️ **Dashboards Ultra-Avancés**
- ✅ **Super Admin Dashboard** : Contrôle total du système
- ✅ **Dashboard Revendeur** : Gestion des ventes et commissions
- ✅ **Analytics en temps réel** avec métriques révolutionnaires
- ✅ **Interface intuitive** et responsive

### 🔐 **Sécurité Enterprise-Grade**
- ✅ **JWT sécurisé** avec sessions multi-tenant
- ✅ **Permissions granulaires** par rôle
- ✅ **Audit trail** complet
- ✅ **Protection multi-couches**

## 🚀 Démarrage Rapide

### 📋 Prérequis
- Node.js 18+ 
- npm ou yarn
- Base de données SQLite (ou PostgreSQL/MySQL pour la production)

### ⚡ Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/electro-satellite-tunisie.git
cd electro-satellite-tunisie

# Installer les dépendances
npm install

# Configurer la base de données
npx prisma generate
npx prisma db push

# Démarrer le serveur de développement
npm run dev
```

### 🌐 Accès
- **Application** : https://iptv-ten-mu.vercel.app/
- **Documentation** : https://iptv-ten-mu.vercel.app/README.md
- **Liens rapides** : https://iptv-ten-mu.vercel.app/liens-rapides.html

## 🎯 Architecture Technique

### 🗄️ **Base de Données (Prisma)**
```prisma
// Système multi-tenant avec isolation complète
model Tenant {
  id          String   @id @default(cuid())
  name        String   @unique
  type        TenantType
  settings    Json
  users       User[]
  products   Product[]
  orders      Order[]
  commissions Commission[]
}

// Gestion des produits mixtes
model Product {
  id              String   @id @default(cuid())
  type            ProductType // DIGITAL, PHYSICAL, MIXED
  digitalContent  DigitalContent?
  physicalSpecs   PhysicalSpecs?
  // ... autres champs
}
```

### 🔐 **Authentification (JWT)**
```typescript
// Système de permissions révolutionnaire
export class PermissionManager {
  static canAccess(user: UserSession, resource: string, action: string): boolean {
    return this.hasPermission(user.permissions, resource, action);
  }
}
```

### 💰 **Commissions Multi-Niveaux**
```typescript
// Calcul automatique des commissions
const commission = CommissionCalculator.calculateCommission(
  orderTotal, userTier, level, productType
);
```

## 📱 Pages Principales

| Page | URL | Description |
|------|-----|-------------|
| 🏠 **Accueil** | https://iptv-ten-mu.vercel.app/ | Page d'accueil avec hero animé |
| 🎛️ **Super Admin** | https://iptv-ten-mu.vercel.app/super-admin/dashboard | Contrôle total du système |
| 💼 **Revendeur** | https://iptv-ten-mu.vercel.app/revendeur/dashboard | Gestion des ventes |
| 🔐 **Connexion** | https://iptv-ten-mu.vercel.app/auth/signin | Authentification |
| 📦 **Produits** | https://iptv-ten-mu.vercel.app/ipTV, https://iptv-ten-mu.vercel.app/netflix, etc. | Catégories de produits |
| 🛒 **Panier** | https://iptv-ten-mu.vercel.app/cart | Panier d'achat intelligent |

## 🚀 API Routes

### 🔐 Authentification
```bash
POST https://iptv-ten-mu.vercel.app/api/auth/revolutionary
GET  https://iptv-ten-mu.vercel.app/api/auth/revolutionary
```

### 📦 Produits
```bash
GET    https://iptv-ten-mu.vercel.app/api/products/revolutionary
POST   https://iptv-ten-mu.vercel.app/api/products/revolutionary
PUT    https://iptv-ten-mu.vercel.app/api/products/revolutionary
DELETE https://iptv-ten-mu.vercel.app/api/products/revolutionary
```

### 💰 Commissions
```bash
POST https://iptv-ten-mu.vercel.app/api/commissions/revolutionary
GET  https://iptv-ten-mu.vercel.app/api/commissions/revolutionary
PUT  https://iptv-ten-mu.vercel.app/api/commissions/revolutionary
```

## 🏆 Système de Commissions

| Tier | Niveau 1 | Niveau 2 | Niveau 3 | Bonus |
|------|----------|----------|----------|-------|
| 🥉 **BRONZE** | 5% | 3% | 1% | +1% |
| 🥈 **SILVER** | 8% | 5% | 2% | +1.5% |
| 🥇 **GOLD** | 12% | 8% | 3% | +2% |
| 💎 **PLATINUM** | 15% | 10% | 5% | +2.5% |
| 👑 **DIAMOND** | 20% | 15% | 8% | +3% |

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting

# Base de données
npx prisma studio    # Interface graphique
npx prisma generate  # Générer le client
npx prisma db push   # Synchroniser le schéma
```

## 📚 Documentation

- 📖 **[Guide Complet](README.md)** - Documentation détaillée
- 🧭 **[Navigation](NAVIGATION.md)** - Guide de navigation
- 🚀 **[Démarrage](DEMARRAGE.md)** - Guide de démarrage rapide
- 📋 **[Résumé Final](RESUME-FINAL.md)** - Résumé des fonctionnalités

## 🌍 Déploiement

### 🚀 Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### 🐳 Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 🔧 Variables d'Environnement
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-nextauth-secret"
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support & Contact

**Développé avec ❤️ par [Younsi Alaeddine](https://github.com/younsi-alaeddine)**

- 📧 **Email** : contact@electro-satellite.tn
- 📞 **Téléphone** : +216 25 288 323
- 💬 **WhatsApp** : +216 22 309 483

## 🎉 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Prisma](https://prisma.io/) - ORM moderne
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI

---

## ⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !

[![GitHub stars](https://img.shields.io/github/stars/votre-username/electro-satellite-tunisie?style=social)](https://github.com/votre-username/electro-satellite-tunisie/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/votre-username/electro-satellite-tunisie?style=social)](https://github.com/votre-username/electro-satellite-tunisie/network)

**🚀 Prêt pour révolutionner l'industrie e-commerce !** 🌍✨
