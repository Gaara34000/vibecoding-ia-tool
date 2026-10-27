# Cahier des Charges - VibeCoding IA Tool

## 1. Contexte et objectif
### Contexte
L'écriture de tests unitaires est une étape essentielle mais souvent répétitive et chronophage dans le cycle de développement logiciel. De nombreux développeurs manquent de temps ou de rigueur pour couvrir l'ensemble de leurs fonctions JavaScript.

### Objectif
Développer une application web front-end intuitive qui permet aux développeurs de soumettre un extrait de code source en JavaScript/TypeScript, de sélectionner leur framework de test favori, et de générer instantanément des tests unitaires de qualité grâce à une intelligence artificielle.

---

## 2. Périmètre (Scope)
### Inclus dans la V1 :
*   **Interface de saisie :** Un éditeur de texte/zone de saisie pour coller le code source à tester.
*   **Sélection du framework :** Un sélecteur pour choisir le framework cible (Jest ou Vitest).
*   **Génération par IA :** Intégration d'un appel API vers un modèle de langage pour analyser le code et produire les tests.
*   **Affichage et Copie :** Une zone de rendu formatée (coloration syntaxique) avec un bouton "Copier dans le presse-papier".
*   **Historique local :** Sauvegarde des 5 dernières générations dans le `localStorage` du navigateur.

### Exclu de la V1 :
*   Système d'authentification et de gestion de profils utilisateurs.
*   Exécution réelle des tests dans le navigateur (ex: via WebContainers).
*   Backend persistant avec base de données (toutes les données restent côté client).

---

## 3. Personas
*   **Thomas, Développeur Web Junior (30 ans) :** Autodidacte ou en reconversion, il maîtrise les bases du JavaScript mais a du mal à structurer ses tests unitaires. Il cherche un outil pour apprendre par l'exemple et gagner en productivité.
*   **Sarah, Développeuse Full-Stack (36 ans) :** Expérimentée, elle souhaite automatiser la corvée d'écriture des tests basiques sur des fonctions utilitaires pour se concentrer sur la logique métier complexe.

---

## 4. User Stories
1.  **US1 - Saisie du code source :** 
    *   *En tant que* développeur, 
    *   *je veux* pouvoir coller mon code source JavaScript dans une zone dédiée, 
    *   *afin que* l'outil puisse l'analyser.
2.  **US2 - Choix du framework :** 
    *   *En tant que* développeur, 
    *   *je veux* sélectionner mon framework de test cible (Jest ou Vitest), 
    *   *afin que* le code généré corresponde exactement à ma stack technique.
3.  **US3 - Copie rapide du résultat :** 
    *   *En tant que* développeur, 
    *   *je veux* copier le code des tests générés en un seul clic, 
    *   *afin de* l'intégrer immédiatement dans mon projet.

---

## 5. Contraintes techniques
*   **Stack Front-end :** HTML5, CSS3, JavaScript (Vanilla ou React selon l'évolution), utilisation de balises sémantiques et d'un design épuré (mode sombre/clair).
*   **Performance :** Temps de réponse rapide de l'interface, légèreté du bundle front-end.
*   **Compatibilité :** Navigateurs modernes (Chrome, Firefox, Safari, Edge).

---

## 6. Maquette (Wireframe)

```text
+-------------------------------------------------------------------+
|  VibeCoding IA Tool                              [Theme: Dark/Light]|
+-------------------------------------------------------------------+
|                                                                   |
|  [ Code Source (JS) ]              [ Tests Générés (Jest/Vitest)] |
|  +--------------------------+      +----------------------------+ |
|  | function add(a, b) {     |      | describe('add', () => {    | |
|  |   return a + b;          |      |   it('should sum...', ()   | |
|  | }                        |      |     expect(add(1,2)).toBe(3)| |
|  |                          |      |   });                      | |
|  |                          |      | });                        | |
|  +--------------------------+      +----------------------------+ |
|  Framework: [ Jest v ]             [ Copier le code ]             |
|  [ Générer les tests ]                                            |
|                                                                   |
+-------------------------------------------------------------------+

## 7. Suggestions de l’IA

1. **Ajouter un indicateur visuel de chargement (spinner) et une gestion des erreurs.**
   * *Commentaire :* **Accepté.** Indispensable pour l'expérience utilisateur (UX) afin d'éviter que l'interface ne semble figée pendant l'appel à l'IA et pour informer l'utilisateur en cas de problème réseau ou de quota.

2. **Permettre de spécifier le style de test (BDD vs TDD / `describe/it` vs `test()`).**
   * *Commentaire :* **Refusé pour la V1.** Complexifie inutilement l'interface de saisie pour une première version. Il vaut mieux s'en tenir à un standard propre (style `describe`/`it`) et garder cette option pour une V2.

3. **Intégrer un bouton « Charger un exemple » et un bouton « Vider ».**
   * *Commentaire :* **Accepté.** Cela facilitera grandement les tests de l'application en injectant directement une fonction JavaScript type sans obliger l'utilisateur à en chercher une lui-même.