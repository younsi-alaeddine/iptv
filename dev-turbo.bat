@echo off
echo.
echo ========================================
echo 🚀 ELECTRO SATELLITE TUNISIE - TURBOPACK
echo ========================================
echo.
echo Démarrage avec Turbopack pour des performances maximales...
echo.

echo ✅ Installation des dépendances...
call npm install

echo.
echo ✅ Génération du client Prisma...
call npx prisma generate

echo.
echo ✅ Démarrage avec Turbopack...
echo.
echo 🌟 SERVEUR ACTIF SUR: http://localhost:3000
echo.
echo 📱 LIENS PRINCIPAUX:
echo    - Accueil: http://localhost:3000/
echo    - Production: https://iptv-ten-mu.vercel.app/
echo    - Super Admin: http://localhost:3000/super-admin/dashboard
echo    - Revendeur: http://localhost:3000/revendeur/dashboard
echo.
echo 🎯 Fonctionnalités révolutionnaires actives:
echo    ✅ Multi-tenant avec isolation complète
echo    ✅ Produits digitaux et physiques
echo    ✅ Commissions multi-niveaux automatiques
echo    ✅ Dashboards ultra-avancés
echo    ✅ Analytics en temps réel
echo    ⚡ Turbopack pour des performances maximales
echo.
echo ========================================
echo Développé avec ❤️ par Younsi Alaeddine
echo ========================================
echo.

call npm run dev
