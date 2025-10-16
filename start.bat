@echo off
echo.
echo ========================================
echo 🚀 ELECTRO SATELLITE TUNISIE
echo ========================================
echo.
echo Démarrage de la plateforme révolutionnaire...
echo.

echo ✅ Vérification des dépendances...
call npm install

echo.
echo ✅ Génération du client Prisma...
call npx prisma generate

echo.
echo ✅ Démarrage du serveur de développement...
echo.
echo 🌟 SERVEUR ACTIF SUR: http://localhost:3000
echo.
echo 📱 LIENS PRINCIPAUX:
echo    - Accueil: http://localhost:3000/
echo    - Super Admin: http://localhost:3000/super-admin/dashboard
echo    - Revendeur: http://localhost:3000/revendeur/dashboard
echo    - Connexion: http://localhost:3000/auth/signin
echo.
echo 🎯 Fonctionnalités révolutionnaires actives:
echo    ✅ Multi-tenant avec isolation complète
echo    ✅ Produits digitaux et physiques
echo    ✅ Commissions multi-niveaux automatiques
echo    ✅ Dashboards ultra-avancés
echo    ✅ Analytics en temps réel
echo.
echo ========================================
echo Développé avec ❤️ par Younsi Alaeddine
echo ========================================
echo.

call npm run dev
