// test-back.js - Tests des fonctions PocketBase
// Lancer avec: node backend/test-back.js

import {
    getAllArtistes,
    getArtisteById,
    getArtisteBySlug,
    getArtistesByJour,
    getArtistesByScene,
    getProgramme,
    getProgrammeByJour,
    getInfos,
    pb
} from './backend.mjs';

// Fonction pour afficher les résultats
function afficher(titre, data) {
    console.log('\n========================================');
    console.log(titre);
    console.log('========================================');
    console.log(JSON.stringify(data, null, 2));
}

// Fonction principale de test
async function runTests() {
    console.log('Démarrage des tests PocketBase...');
    console.log('URL PocketBase:', pb.baseURL);

    // Test 1: Récupérer tous les artistes
    console.log('\n--- Test 1: getAllArtistes ---');
    const artistes = await getAllArtistes();
    afficher('Tous les artistes', artistes);

    // Test 2: Récupérer un artiste par ID (si des artistes existent)
    if (artistes.length > 0) {
        console.log('\n--- Test 2: getArtisteById ---');
        const premierArtiste = await getArtisteById(artistes[0].id);
        afficher('Premier artiste par ID', premierArtiste);

        // Test 3: Récupérer un artiste par slug (si le champ existe)
        if (artistes[0].slug) {
            console.log('\n--- Test 3: getArtisteBySlug ---');
            const artisteParSlug = await getArtisteBySlug(artistes[0].slug);
            afficher('Artiste par slug', artisteParSlug);
        }
    }

    // Test 4: Récupérer les artistes du 29 août
    console.log('\n--- Test 4: getArtistesByJour ---');
    const artistes29 = await getArtistesByJour('29 août');
    afficher('Artistes du 29 août', artistes29);

    // Test 5: Récupérer les artistes par scène
    console.log('\n--- Test 5: getArtistesByScene ---');
    const artistesKiosque = await getArtistesByScene('kiosque');
    afficher('Artistes du Kiosque', artistesKiosque);

    // Test 6: Récupérer le programme
    console.log('\n--- Test 6: getProgramme ---');
    const programme = await getProgramme();
    afficher('Programme complet', programme);

    // Test 7: Récupérer le programme du 30 août
    console.log('\n--- Test 7: getProgrammeByJour ---');
    const programme30 = await getProgrammeByJour('30 août');
    afficher('Programme du 30 août', programme30);

    // Test 8: Récupérer les infos pratiques
    console.log('\n--- Test 8: getInfos ---');
    const infos = await getInfos();
    afficher('Infos pratiques', infos);

    console.log('\n========================================');
    console.log('Tests terminés !');
    console.log('========================================');
}

// Lancer les tests
runTests().catch(console.error);
