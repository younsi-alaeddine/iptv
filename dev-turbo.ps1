# ========================================
# 🚀 ELECTRO SATELLITE TUNISIE - TURBOPACK
# ========================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 ELECTRO SATELLITE TUNISIE - TURBOPACK" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Démarrage avec Turbopack pour des performances maximales..." -ForegroundColor Green
Write-Host ""

Write-Host "✅ Installation des dépendances..." -ForegroundColor Green
npm install

Write-Host ""
Write-Host "✅ Génération du client Prisma..." -ForegroundColor Green
npx prisma generate

Write-Host ""
Write-Host "✅ Démarrage avec Turbopack..." -ForegroundColor Green
Write-Host ""
Write-Host "🌟 SERVEUR ACTIF SUR: " -ForegroundColor Yellow -NoNewline
Write-Host "http://localhost:3000" -ForegroundColor Red
Write-Host ""
Write-Host "📱 LIENS PRINCIPAUX:" -ForegroundColor Cyan
Write-Host "   - Accueil: " -NoNewline
Write-Host "http://localhost:3000/" -ForegroundColor Blue
Write-Host "   - Production: " -NoNewline
Write-Host "https://iptv-ten-mu.vercel.app/" -ForegroundColor Green
Write-Host "   - Super Admin: " -NoNewline
Write-Host "http://localhost:3000/super-admin/dashboard" -ForegroundColor Blue
Write-Host "   - Revendeur: " -NoNewline
Write-Host "http://localhost:3000/revendeur/dashboard" -ForegroundColor Blue
Write-Host ""
Write-Host "🎯 Fonctionnalités révolutionnaires actives:" -ForegroundColor Magenta
Write-Host "   ✅ Multi-tenant avec isolation complète" -ForegroundColor Green
Write-Host "   ✅ Produits digitaux et physiques" -ForegroundColor Green
Write-Host "   ✅ Commissions multi-niveaux automatiques" -ForegroundColor Green
Write-Host "   ✅ Dashboards ultra-avancés" -ForegroundColor Green
Write-Host "   ✅ Analytics en temps réel" -ForegroundColor Green
Write-Host "   ⚡ Turbopack pour des performances maximales" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Développé avec ❤️ par Younsi Alaeddine" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Démarrer le serveur avec Turbopack
npm run dev
