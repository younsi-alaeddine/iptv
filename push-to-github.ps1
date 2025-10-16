# ========================================
# 🚀 PUSH TO GITHUB - ELECTRO SATELLITE
# ========================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 PUSH TO GITHUB - ELECTRO SATELLITE" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Demander le nom d'utilisateur GitHub
$githubUsername = Read-Host "Entrez votre nom d'utilisateur GitHub"

# Demander le nom du repository
$repoName = Read-Host "Nom du repository (par défaut: electro-satellite-tunisie)"
if ([string]::IsNullOrEmpty($repoName)) {
    $repoName = "electro-satellite-tunisie"
}

Write-Host ""
Write-Host "✅ Configuration du remote GitHub..." -ForegroundColor Green
try {
    git remote add origin "https://github.com/$githubUsername/$repoName.git"
    Write-Host "Remote ajouté avec succès !" -ForegroundColor Green
} catch {
    Write-Host "Remote déjà configuré ou erreur." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Push vers GitHub..." -ForegroundColor Green
try {
    git push -u origin main
    Write-Host "Push réussi !" -ForegroundColor Green
} catch {
    Write-Host "Erreur lors du push. Vérifiez vos credentials GitHub." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Création du tag v1.0.0..." -ForegroundColor Green
try {
    git tag -a v1.0.0 -m "🚀 Version 1.0.0 - Plateforme Révolutionnaire"
    Write-Host "Tag créé avec succès !" -ForegroundColor Green
} catch {
    Write-Host "Tag déjà existant." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Push du tag..." -ForegroundColor Green
try {
    git push origin v1.0.0
    Write-Host "Tag pushé avec succès !" -ForegroundColor Green
} catch {
    Write-Host "Erreur lors du push du tag." -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎉 SUCCÈS !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Votre repository est maintenant sur GitHub :" -ForegroundColor Yellow
Write-Host "   https://github.com/$githubUsername/$repoName" -ForegroundColor Blue
Write-Host ""
Write-Host "📋 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "   1. Aller sur GitHub et configurer le repository" -ForegroundColor White
Write-Host "   2. Ajouter une description et des topics" -ForegroundColor White
Write-Host "   3. Créer une release v1.0.0" -ForegroundColor White
Write-Host "   4. Partager le projet !" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Développé avec ❤️ par Younsi Alaeddine" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Ouvrir le repository dans le navigateur
$openBrowser = Read-Host "Voulez-vous ouvrir le repository dans le navigateur ? (y/n)"
if ($openBrowser -eq "y" -or $openBrowser -eq "Y" -or $openBrowser -eq "yes") {
    Start-Process "https://github.com/$githubUsername/$repoName"
}

Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
