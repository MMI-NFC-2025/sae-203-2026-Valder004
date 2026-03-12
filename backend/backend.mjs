import PocketBase from 'pocketbase'; 
const pb = new PocketBase('https://jumelage.valentin-deroo.fr');

export async function artistesSorted() { 
    const records = await pb.collection('Artiste').getFullList({ sort: 'date' }); 
    return records; 
}

export async function scenesName() { 
    const records = await pb.collection('Scene').getFullList({ sort: 'nom' }); 
    return records; 
}



export async function artistesName() { 
    const records = await pb.collection('Artiste').getFullList({ sort: 'nom' }); 
    return records; 
}

export async function getAllArtistes() { 
    try {
        const records = await pb.collection('Artiste').getFullList({ sort: 'nom' }); 
        console.log(`✓ ${records.length} artistes chargés de PocketBase`);
        

        if (records.length > 0) {
            console.log('📋 Structure d\'un artiste:', {
                id: records[0].id,
                nom: records[0].nom,
                genre_musical: records[0].genre_musical,
                photo: records[0].photo,
                galerie: records[0].galerie,
                date: records[0].date,
                description: records[0].description
            });
        }
        
        return records;
    } catch (error) {
        console.error('Erreur PocketBase - getAllArtistes:', {
            status: error.status,
            message: error.message,
            url: error.url,
            response: error.response
        });
        throw error;
    }
}

export async function getArtisteById(id) { 
    try {
        const record = await pb.collection('Artiste').getOne(id);
        return record;
    } catch (error) {
        console.error('Erreur PocketBase - getArtisteById:', {
            id,
            status: error.status,
            message: error.message
        });
        throw error;
    }
}

export async function artisteID(id) { 
    return getArtisteById(id);
}

export async function sceneID(id) { 
    const record = await pb.collection('Scene').getOne(id); 
    return record; 
}

export async function allartistebysceneId(id) { 
    const records = await pb.collection('Artiste').getFullList({ filter: `Scene = "${id}"`, sort: 'date' }); 
    return records; 
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('Scene').getFirstListItem(`nom = "${nom}"`);
    const records = await pb.collection('Artiste').getFullList({ filter: `Scene = "${scene.id}"`, sort: 'date' }); 
    return records; 
}
export async function addArtiste(artisteData) {
    try {
        const record = await pb.collection('Artiste').create(artisteData);
        console.log('Artiste ajouté :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'artiste :", error);
        throw error;
    }
}

export async function addScene(sceneData) {
    try {
        const record = await pb.collection('Scene').create(sceneData);
        console.log('Scène ajoutée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la scène :", error);
        throw error;
    }
}

export async function updateArtiste(id, artisteData) {
    try {
        const record = await pb.collection('Artiste').update(id, artisteData);
        console.log('Artiste modifié :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification de l'artiste :", error);
        throw error;
    }
}

export async function updateScene(id, sceneData) {
    try {
        const record = await pb.collection('Scene').update(id, sceneData);
        console.log('Scène modifiée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification de la scène :", error);
        throw error;
    }
}

export function getImageUrl(record, imageName) {
    if (!record || !imageName) return null;

    const collectionId = record.collectionId || record.collection || record.collectionName;

    if (!collectionId) {
        console.error("Impossible de déterminer collectionId pour :", record);
        return null;
    }

    return `https://jumelage.valentin-deroo.fr/api/files/${collectionId}/${record.id}/${imageName}`;
}
export async function getAllScenes() {
  try {
    return await pb.collection('Scene').getFullList({
      sort: 'nom'
    });
  } catch (error) {
    console.error("Erreur PocketBase - getAllScenes:", error);
    return [];
  }
}
export async function sendContactMessage(data) {
  try {
    return await pb.collection('contact').create(data);
  } catch (error) {
    console.error("Erreur PocketBase - sendContactMessage:", error);
    throw error;
  }
}
