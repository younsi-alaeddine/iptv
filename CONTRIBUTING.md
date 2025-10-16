# 🤝 Guide de Contribution - Electro Satellite Tunisie

Merci de votre intérêt pour contribuer à notre plateforme e-commerce révolutionnaire ! 🚀

## 📋 Comment Contribuer

### 1. 🍴 Fork le Projet
- Cliquez sur le bouton "Fork" en haut à droite du repository
- Clonez votre fork localement :
```bash
git clone https://github.com/votre-username/electro-satellite-tunisie.git
cd electro-satellite-tunisie
```

### 2. 🌿 Créer une Branche
```bash
# Créer une nouvelle branche pour votre feature
git checkout -b feature/AmazingFeature

# Ou pour un bug fix
git checkout -b bugfix/FixAmazingBug
```

### 3. 🔧 Configurer l'Environnement
```bash
# Installer les dépendances
npm install

# Configurer la base de données
npx prisma generate
npx prisma db push

# Démarrer le serveur de développement
npm run dev
```

### 4. ✨ Développer
- Faites vos modifications
- Testez vos changements
- Suivez les conventions de code existantes
- Assurez-vous que tous les tests passent

### 5. 📝 Commit
```bash
# Ajouter les fichiers modifiés
git add .

# Commit avec un message descriptif
git commit -m "feat: add amazing new feature"
```

### 6. 🚀 Push et Pull Request
```bash
# Push vers votre fork
git push origin feature/AmazingFeature
```

- Allez sur GitHub et créez une Pull Request
- Remplissez le template de PR
- Attendez la review

## 🎯 Types de Contributions

### 🐛 Bug Fixes
- Corriger des bugs existants
- Améliorer la stabilité
- Optimiser les performances

### ✨ Nouvelles Fonctionnalités
- Ajouter de nouvelles pages
- Implémenter de nouvelles API
- Améliorer l'interface utilisateur

### 📚 Documentation
- Améliorer la documentation
- Ajouter des exemples
- Corriger les typos

### 🎨 UI/UX
- Améliorer le design
- Ajouter des animations
- Optimiser la responsivité

## 📏 Conventions de Code

### 🎨 Style de Code
- Utilisez **TypeScript** strictement
- Suivez les conventions **ESLint** configurées
- Utilisez **Prettier** pour le formatage
- Nommez les variables de manière descriptive

### 📝 Messages de Commit
Utilisez le format conventionnel :
```
type(scope): description

feat(auth): add multi-tenant authentication
fix(api): resolve commission calculation bug
docs(readme): update installation instructions
style(ui): improve dashboard animations
refactor(db): optimize product queries
test(api): add commission calculation tests
```

### 🏗️ Architecture
- Suivez l'architecture multi-tenant existante
- Utilisez les patterns établis (Repository, Service, etc.)
- Maintenez la séparation des responsabilités

## 🧪 Tests

### 🔍 Tests Unitaires
```bash
# Lancer les tests
npm test

# Tests en mode watch
npm run test:watch
```

### 🚀 Tests d'Intégration
```bash
# Tests d'API
npm run test:api

# Tests E2E
npm run test:e2e
```

## 📋 Checklist avant Pull Request

### ✅ Code Quality
- [ ] Code respecte les conventions ESLint
- [ ] TypeScript sans erreurs
- [ ] Tests passent tous
- [ ] Documentation mise à jour

### ✅ Fonctionnalités
- [ ] Feature fonctionne correctement
- [ ] Pas de régression
- [ ] Interface responsive
- [ ] Accessibilité respectée

### ✅ Sécurité
- [ ] Pas d'injection SQL
- [ ] Validation des inputs
- [ ] Authentification respectée
- [ ] Permissions vérifiées

## 🐛 Signaler un Bug

### 📝 Template de Bug Report
```markdown
**Description du Bug**
Une description claire du problème.

**Étapes pour Reproduire**
1. Aller à '...'
2. Cliquer sur '....'
3. Voir l'erreur

**Comportement Attendu**
Ce qui devrait se passer.

**Screenshots**
Si applicable, ajoutez des captures d'écran.

**Environnement**
- OS: [ex: Windows 10]
- Navigateur: [ex: Chrome 120]
- Version: [ex: 1.0.0]
```

## ✨ Proposer une Feature

### 📝 Template de Feature Request
```markdown
**Feature Request**
Une description claire de la feature souhaitée.

**Problème à Résoudre**
Quel problème cette feature résout-elle ?

**Solution Proposée**
Décrivez votre solution.

**Alternatives**
Autres solutions considérées.

**Contexte Additionnel**
Autre contexte utile.
```

## 🏷️ Labels Utilisés

- `bug` - Quelque chose ne fonctionne pas
- `enhancement` - Nouvelle feature ou amélioration
- `documentation` - Amélioration de la documentation
- `good first issue` - Bon pour les nouveaux contributeurs
- `help wanted` - Besoin d'aide externe
- `priority:high` - Priorité élevée
- `priority:medium` - Priorité moyenne
- `priority:low` - Priorité faible

## 🎉 Reconnaissance

Tous les contributeurs seront reconnus dans :
- Le fichier `CONTRIBUTORS.md`
- Les releases GitHub
- La documentation du projet

## 📞 Support

### 💬 Questions ?
- Ouvrez une issue avec le label `question`
- Contactez-nous directement :
  - 📧 Email: contact@electro-satellite.tn
  - 📞 Téléphone: +216 25 288 323

### 🤝 Communauté
- Rejoignez notre communauté Discord
- Suivez-nous sur les réseaux sociaux
- Partagez vos créations

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous la licence MIT du projet.

---

**Merci de contribuer à Electro Satellite Tunisie ! 🚀**

*Développé avec ❤️ par Younsi Alaeddine*
