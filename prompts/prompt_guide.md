# Guide des Prompts - Vibecoding

Ce guide résume les principes fondamentaux pour concevoir des prompts efficaces et obtenir des résultats précis de la part des LLMs.

## 1. La structure d'un bon prompt (R.C.C.F.)
Pour qu'un LLM comprenne parfaitement sa mission, un prompt structuré doit intégrer 4 piliers :
*   **Rôle :** Définir l'expertise ou la persona de l'IA (ex. : *« Tu es un développeur full-stack senior... »*).
*   **Contexte :** Expliquer le projet, l'objectif global et l'environnement technique.
*   **Consigne :** Préciser la tâche exacte à accomplir, étape par étape si nécessaire.
*   **Format :** Indiquer la structure attendue du résultat (ex. : *« Fournis uniquement du code brut »*, *« Utilise des listes à puces »*).

## 2. Les techniques clés de Prompt Engineering
*   **Zero-shot :** Consiste à donner une consigne directe à l'IA sans lui fournir d'exemple préalable. Idéal pour des tâches simples ou standard.
*   **Few-shot :** Consiste à fournir un ou plusieurs exemples d'entrées/sorties avant de poser la vraie question. Permet de caler le style, le format ou la logique attendue.
*   **Chain-of-thought (Chaîne de pensée) :** Demande explicitement à l'IA de détailler son raisonnement étape par étape avant de donner la réponse finale. Très utile pour le code complexe ou la logique algorithmique.