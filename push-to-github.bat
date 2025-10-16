@echo off
echo.
echo ========================================
echo 🚀 PUSH TO GITHUB - ELECTRO SATELLITE
echo ========================================
echo.

set /p GITHUB_USERNAME="Entrez votre nom d'utilisateur GitHub: "
set /p REPO_NAME="Nom du repository (par défaut: electro-satellite-tunisie): "

if "%REPO_NAME%"=="" set REPO_NAME=electro-satellite-tunisie

echo.
echo ✅ Configuration du remote GitHub...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo ✅ Push vers GitHub...
git push -u origin main

echo.
echo ✅ Création du tag v1.0.0...
git tag -a v1.0.0 -m "🚀 Version 1.0.0 - Plateforme Révolutionnaire"

echo.
echo ✅ Push du tag...
git push origin v1.0.0

echo.
echo ========================================
echo 🎉 SUCCÈS !
echo ========================================
echo.
echo 🌐 Votre repository est maintenant sur GitHub :
echo    https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
echo.
echo 📋 Prochaines étapes :
echo    1. Aller sur GitHub et configurer le repository
echo    2. Ajouter une description et des topics
echo    3. Créer une release v1.0.0
echo    4. Partager le projet !
echo.
echo ========================================
echo Développé avec ❤️ par Younsi Alaeddine
echo ========================================
echo.

pause
