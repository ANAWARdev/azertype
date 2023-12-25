// console.log("Hello World");

// let motTapeOk = true // Essayez de mettre false à la place de true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//     console.log("Échec, le mot n'est pas correct")
// }

// let motUtilisateur = prompt("Entrez un mot :");
// console.log(motUtilisateur);

// const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// // if (motUtilisateur === motApplication) {
// //     console.log("Bravo !")
// // } else {
// //     console.log("Vous avez fait une erreur de frappe.")
// // }

// // if (motUtilisateur === motApplication) {
// //     console.log("Bravo !")
// // } else {
// //     if (motUtilisateur === "Gredin") {
// //         console.log("Restez correct !")
// //     } else {
// //         if (motUtilisateur === "Mécréant") {
// //             console.log("Restez correct !")
// //         } else {
// //             if (motUtilisateur === "Vilain") {
// //                 console.log("Soyez gentil !")
// //             } else {
// //                 console.log("Vous avez fait une erreur de frappe.")
// //             }
// //         }
// //     }
// // }

// switch (motUtilisateur) {
//     case motApplication:
//         console.log("Bravo !")
//         break
//     case "Gredin":
//         console.log("Restez correct !")
//         break
//     case "Mécréant":
//         console.log("Restez correct !")
//         break
//     case "Vilain":
//         console.log("Soyez gentil !")
//         break
//     default:
//         console.log("Vous avez fait une erreur de frappe.")
// }

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
// const listeMots = ["Cachalot", "Pétunia", "Serviette"];
// let score = 0;

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
// let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

// // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond
// // au premier mot du tableau "listeMots"
// if (motUtilisateur === listeMots[0]) {
//   score++;
// }

// // Idem avec le second mot du tableau
// // Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur",
// // cela permet de réutiliser la variable déclarée précédemment
// motUtilisateur = prompt("Entrez le mot : " + listeMots[1]);
// if (motUtilisateur === listeMots[1]) {
//   score++;
// }

// // Idem avec le troisième mot du tableau
// motUtilisateur = prompt("Entrez le mot : " + listeMots[2]);
// if (motUtilisateur === listeMots[2]) {
//   score++;
// }

// // Affichage du score de l'utilisateur
// console.log("Votre score est de " + score + " sur 3");

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur

// let score = 0

// // Déclaration de la variable contenant le choix de l'utilisateur
// let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
// while (choix !== "mots" && choix !== "phrases") {
//     choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// }

// if (choix === "mots") {
//     // On parcourt le tableau des mots
//     for (let i = 0; i < listeMots.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
//         if (motUtilisateur === listeMots[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// } else {
//     // On parcourt le tableau des phrases
//     for (let i = 0; i < listePhrases.length; i++) {
//         // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
//         let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
//         if (phraseUtilisateur === listePhrases[i]) {
//             // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listePhrases.length)
// }

// // A noter : ce n'est pas la seule réponse valide pour cet exercice, il en existe d'autres plus optimisées, 
// // mais nous verrons cela dans les prochains chapitres.


// Correction avec les fonction
/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */
function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 * 
 * @param {array[string]} listePropositions 
 * @return {number} : le score de l'utilisateur
 */
function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    return score
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    // On détermine la liste des mots ou des phrases à proposer à l'utilisateur
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}