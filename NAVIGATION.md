# 🚀 NAVIGATION RAPIDE - ELECTRO SATELLITE TUNISIE

## 🎯 **LIENS PRINCIPAUX** (http://localhost:3000)

### 🏠 **PAGES PUBLIQUES**
| Page | Lien | Description |
|------|------|-------------|
| **Accueil** | `/` | Page d'accueil avec hero et produits |
| **Panier** | `/cart` | Panier d'achat avec gestion des items |
| **Contact** | `/contact` | Informations de contact et support |

### 🔐 **AUTHENTIFICATION**
| Page | Lien | Description |
|------|------|-------------|
| **Connexion** | `/auth/signin` | Page de connexion utilisateur |
| **Inscription** | `/auth/signup` | Page d'inscription nouveau compte |

### 📱 **CATÉGORIES PRODUITS**
| Page | Lien | Description |
|------|------|-------------|
| **Abonnement TV** | `/ipTV` | Abonnements IPTV et streaming |
| **Sharing & Apollo** | `/sharing-apollo` | Services de partage et Apollo |
| **Box Android** | `/box-android` | Box Android et matériel |
| **Récepteur HD** | `/recepteur-hd` | Récepteurs HD et accessoires |
| **BeIN Sports** | `/bein-sports` | Abonnements sportifs |
| **Netflix Official** | `/netflix` | Abonnements Netflix officiels |
| **Accessoires** | `/accessoires` | Accessoires et périphériques |

### 🎛️ **DASHBOARDS**
| Page | Lien | Description |
|------|------|-------------|
| **Super Admin** | `/super-admin/dashboard` | Contrôle total du système |
| **Revendeur** | `/revendeur/dashboard` | Gestion des ventes et commissions |

### 📄 **PAGES LÉGALES**
| Page | Lien | Description |
|------|------|-------------|
| **Mentions Légales** | `/mentions-legales` | Mentions légales du site |
| **Confidentialité** | `/politique-confidentialite` | Politique de confidentialité |
| **CGV** | `/cgv` | Conditions générales de vente |
| **Livraison** | `/livraison` | Informations de livraison |

---

## 🚀 **API ENDPOINTS**

### 🔐 **AUTHENTIFICATION**
```bash
# Connexion
POST /api/auth/revolutionary
{
  "action": "login",
  "email": "user@example.com",
  "password": "password",
  "tenantId": "tenant-id"
}

# Inscription
POST /api/auth/revolutionary
{
  "action": "register",
  "email": "user@example.com",
  "password": "password",
  "name": "Nom Utilisateur",
  "tenantId": "tenant-id"
}

# Vérification token
GET /api/auth/revolutionary
Authorization: Bearer <token>
```

### 📦 **PRODUITS**
```bash
# Récupérer tous les produits
GET /api/products/revolutionary?tenantId=tenant-id

# Rechercher des produits
GET /api/products/revolutionary?tenantId=tenant-id&search=iptv&type=DIGITAL

# Produit par ID
GET /api/products/revolutionary?productId=product-id&tenantId=tenant-id

# Créer un produit
POST /api/products/revolutionary
{
  "tenantId": "tenant-id",
  "categoryId": "category-id",
  "productData": {
    "sku": "IPTV-001",
    "name": "Abonnement IPTV Premium",
    "type": "DIGITAL",
    "price": 250,
    "tags": ["iptv", "premium"]
  }
}

# Mettre à jour un produit
PUT /api/products/revolutionary
{
  "productId": "product-id",
  "updateData": {
    "name": "Nouveau nom",
    "price": 300
  }
}

# Supprimer un produit
DELETE /api/products/revolutionary?productId=product-id&softDelete=true
```

### 💰 **COMMISSIONS**
```bash
# Calculer les commissions
POST /api/commissions/revolutionary
{
  "action": "calculate",
  "orderId": "order-id",
  "tenantId": "tenant-id",
  "userId": "user-id",
  "orderTotal": 1000,
  "productType": "DIGITAL"
}

# Créer les commissions
POST /api/commissions/revolutionary
{
  "action": "create",
  "tenantId": "tenant-id",
  "orderId": "order-id",
  "calculations": [...]
}

# Rapport de commissions
GET /api/commissions/revolutionary?action=report&tenantId=tenant-id&userId=user-id&startDate=2024-01-01&endDate=2024-12-31

# Analytics des commissions
GET /api/commissions/revolutionary?action=analytics&tenantId=tenant-id&startDate=2024-01-01&endDate=2024-12-31

# Hiérarchie des revendeurs
GET /api/commissions/revolutionary?action=hierarchy&tenantId=tenant-id&userId=user-id&level=3

# Approuver les commissions
PUT /api/commissions/revolutionary
{
  "action": "approve",
  "commissionIds": ["id1", "id2"]
}

# Payer les commissions
PUT /api/commissions/revolutionary
{
  "action": "pay",
  "commissionIds": ["id1", "id2"]
}
```

---

## 🎯 **RÔLES ET PERMISSIONS**

### 👑 **SUPER_ADMIN**
- Accès total au système
- Gestion de tous les tenants
- Configuration globale
- Analytics globales

### 🛡️ **ADMIN**
- Gestion du tenant
- Gestion des utilisateurs
- Gestion des produits
- Analytics du tenant

### 💼 **RESELLER**
- Vente de produits
- Gestion des clients
- Suivi des commissions
- Analytics personnelles

### 👤 **CUSTOMER**
- Achat de produits
- Gestion du profil
- Historique des commandes
- Support client

### 👻 **GUEST**
- Consultation des produits
- Accès limité

---

## 🏆 **TIERS DE COMMISSIONS**

| Tier | Niveau 1 | Niveau 2 | Niveau 3 | Bonus |
|------|----------|----------|----------|-------|
| **🥉 BRONZE** | 5% | 3% | 1% | +1% |
| **🥈 SILVER** | 8% | 5% | 2% | +1.5% |
| **🥇 GOLD** | 12% | 8% | 3% | +2% |
| **💎 PLATINUM** | 15% | 10% | 5% | +2.5% |
| **👑 DIAMOND** | 20% | 15% | 8% | +3% |

---

## 🚀 **DÉMARRAGE RAPIDE**

1. **Installer les dépendances** : `npm install`
2. **Démarrer le serveur** : `npm run dev`
3. **Ouvrir le navigateur** : http://localhost:3000
4. **Explorer les dashboards** : 
   - Super Admin : http://localhost:3000/super-admin/dashboard
   - Revendeur : http://localhost:3000/revendeur/dashboard

---

## 🎉 **FONCTIONNALITÉS RÉVOLUTIONNAIRES**

✅ **Multi-tenant** avec isolation complète  
✅ **Produits digitaux et physiques** intelligents  
✅ **Commissions multi-niveaux** automatiques  
✅ **Dashboards** ultra-avancés  
✅ **Analytics** en temps réel  
✅ **Sécurité** enterprise-grade  
✅ **Performance** exceptionnelle  
✅ **Scalabilité** infinie  

**🚀 PRÊT POUR LA PRODUCTION !** 🌍
