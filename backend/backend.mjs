// backend.mjs - Fonctions PocketBase pour le festival Jumelages
import PocketBase from 'pocketbase';

// Connexion à PocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

// ============================================
// FONCTION UTILITAIRE POUR LES IMAGES
// ============================================

// Construire l'URL d'une image PocketBase
export function getImageUrl(record, filename) {
    if (!record || !filename) return null;
    return `${pb.baseUrl}/api/files/${record.id}/${filename}`;
}

// ============================================
// FONCTIONS POUR LES ARTISTES (invités)
// ============================================

// Récupérer tous les artistes
export async function getAllArtistes() {
    try {
        const records = await pb.collection('artistes').getFullList({
            sort: 'nom',
        });
        return records;
    } catch (error) {
        console.error('Erreur getAllArtistes:', error);
        return [];
    }
}

// Récupérer un artiste par son ID
export async function getArtisteById(id) {
    try {
        const record = await pb.collection('artistes').getOne(id);
        return record;
    } catch (error) {
        console.error('Erreur getArtisteById:', error);
        return null;
    }
}

// Récupérer un artiste par son slug
export async function getArtisteBySlug(slug) {
    try {
        const record = await pb.collection('artistes').getFirstListItem(`slug="${slug}"`);
        return record;
    } catch (error) {
        console.error('Erreur getArtisteBySlug:', error);
        return null;
    }
}

// Récupérer les artistes par jour
export async function getArtistesByJour(jour) {
    try {
        const records = await pb.collection('artistes').getFullList({
            filter: `jour="${jour}"`,
            sort: 'heure',
        });
        return records;
    } catch (error) {
        console.error('Erreur getArtistesByJour:', error);
        return [];
    }
}

// Récupérer les artistes par scène
export async function getArtistesByScene(scene) {
    try {
        const records = await pb.collection('artistes').getFullList({
            filter: `scene="${scene}"`,
            sort: 'heure',
        });
        return records;
    } catch (error) {
        console.error('Erreur getArtistesByScene:', error);
        return [];
    }
}

// ============================================
// FONCTIONS POUR LE PROGRAMME
// ============================================

// Récupérer tout le programme
export async function getProgramme() {
    try {
        const records = await pb.collection('programme').getFullList({
            sort: 'jour,heure',
            expand: 'artiste',
        });
        return records;
    } catch (error) {
        console.error('Erreur getProgramme:', error);
        return [];
    }
}

// Récupérer le programme par jour
export async function getProgrammeByJour(jour) {
    try {
        const records = await pb.collection('programme').getFullList({
            filter: `jour="${jour}"`,
            sort: 'heure',
            expand: 'artiste',
        });
        return records;
    } catch (error) {
        console.error('Erreur getProgrammeByJour:', error);
        return [];
    }
}

// ============================================
// FONCTIONS POUR LES INFOS PRATIQUES
// ============================================

// Récupérer toutes les infos
export async function getInfos() {
    try {
        const records = await pb.collection('infos').getFullList({
            sort: 'ordre',
        });
        return records;
    } catch (error) {
        console.error('Erreur getInfos:', error);
        return [];
    }
}

// ============================================
// EXPORT DE L'INSTANCE POCKETBASE
// ============================================
export { pb };
