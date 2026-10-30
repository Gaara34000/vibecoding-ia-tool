// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sélection des éléments HTML par leur ID ou leur classe
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const introParagraph = document.querySelector('.intro-section p');

    // 2. Vérification de la présence du bouton dans le DOM
    if (learnMoreBtn) {
        
        // 3. Écouteur d'événement sur le clic du bouton
        learnMoreBtn.addEventListener('click', () => {
            
            // Modification dynamique du texte de présentation
            if (introParagraph) {
                introParagraph.innerHTML = `
                    <strong>VibeCoding IA Tool</strong> analyse votre code source JavaScript/TypeScript, 
                    détecte les fonctions à tester et génère automatiquement des suites de tests unitaires 
                    adaptées à votre framework (Jest ou Vitest). 
                    <br><br>
                    <em>Gain de temps garanti et couverture de code optimale !</em>
                `;
            }

            // Changement de l'apparence du bouton après le clic
            learnMoreBtn.textContent = 'Informations affichées !';
            learnMoreBtn.style.backgroundColor = '#10b981'; // Couleur verte de confirmation
            learnMoreBtn.disabled = true; // Désactive le bouton pour éviter de re-cliquer

            // Message d'alerte à l'utilisateur
            alert("Merci de votre intérêt ! Les fonctionnalités complètes d'analyse seront disponibles prochainement.");
        });
        
    } else {
        console.error("Le bouton avec l'ID 'learnMoreBtn' n'a pas été trouvé dans le document.");
    }
});