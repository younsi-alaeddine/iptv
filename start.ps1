# ========================================
# 🚀 ELECTRO SATELLITE TUNISIE
# Plateforme Révolutionnaire
# ========================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 ELECTRO SATELLITE TUNISIE" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Démarrage de la plateforme révolutionnaire..." -ForegroundColor Green
Write-Host ""

Write-Host "✅ Vérification des dépendances..." -ForegroundColor Green
npm install

Write-Host ""
Write-Host "✅ Génération du client Prisma..." -ForegroundColor Green
npx prisma generate

Write-Host ""
Write-Host "✅ Démarrage du serveur de développement..." -ForegroundColor Green
Write-Host ""
Write-Host "🌟 SERVEUR ACTIF SUR: " -ForegroundColor Yellow -NoNewline
Write-Host "http://localhost:3000" -ForegroundColor Red
Write-Host ""
Write-Host "📱 LIENS PRINCIPAUX:" -ForegroundColor Cyan
Write-Host "   - Accueil: " -NoNewline
Write-Host "http://localhost:3000/" -ForegroundColor Blue
Write-Host "   - Super Admin: " -NoNewline
Write-Host "http://localhost:3000/super-admin/dashboard" -ForegroundColor Blue
Write-Host "   - Revendeur: " -NoNewline
Write-Host "http://localhost:3000/revendeur/dashboard" -ForegroundColor Blue
Write-Host "   - Connexion: " -NoNewline
Write-Host "http://localhost:3000/auth/signin" -ForegroundColor Blue
Write-Host ""
Write-Host "🎯 Fonctionnalités révolutionnaires actives:" -ForegroundColor Magenta
Write-Host "   ✅ Multi-tenant avec isolation complète" -ForegroundColor Green
Write-Host "   ✅ Produits digitaux et physiques" -ForegroundColor Green
Write-Host "   ✅ Commissions multi-niveaux automatiques" -ForegroundColor Green
Write-Host "   ✅ Dashboards ultra-avancés" -ForegroundColor Green
Write-Host "   ✅ Analytics en temps réel" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Développé avec ❤️ par Younsi Alaeddine" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Démarrer le serveur
npm run dev
