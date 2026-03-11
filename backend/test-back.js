import {artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene} from './backend.mjs';


/* artistes par date
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/
/ scenes par nom 
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


/artistes par nom
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/ info d'un artiste par id
try { 
    const records = await artisteID('rt5muls1ybuxd1h'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* info d'une scene par id
try { 
    const records = await sceneID('c7a6xkqufv9azad'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* artistes d'une scene par id de la scene et trié par date
try {
    const records = await allartistebysceneId('c7a6xkqufv9azad');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*artistes d'une scene par nom de la scene et trié par date
try {
    const records = await allartistebysceneName('Kiosque');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/* ajouter un artiste
try {
    const artisteData = {
        "nom": "Valentin Deroo",
        "date_de_representation": "2026-08-29T20:00:00.000Z",
        "scene" : "c7a6xkqufv9azad",
        "description" : "il est trop beau",
}; 
    await addArtiste(artisteData);
} catch (e) {
    console.error(e);
}
/

/ ajouter une scene
try {
    const sceneData = {
        "nom": "Arena",
        "artistes": ["oggifpv5a7afcx6", "w4ooktfxkp52nwj"],
        "description" : "scene pour les plus beau",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

/* modifier un artiste
try {
    const data = {
        "nom": "Dis'cover",
        "date_de_representation": "2026-08-29T19:00:00.000Z",
        "scene" : "c7a6xkqufv9azad",
        "description" : " Adèpte des ré-interprétations de grands classiques dans des arrangements Soul / Pop.",
    };
    const record = await updateArtiste('rt5muls1ybuxd1h', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}


/* modifier une scene*/
try {
    const data = {
        "nom": "Kiosque",
        "artistes": ["rt5muls1ybuxd1h", "w4ooktfxkp52nwj"],
        "description" : "Première scène du festival qui se situe au kiosque du Parc près la rose à Montbéliard. ",
    };
    const record = await updateScene('c7a6xkqufv9azad', data);
    console.log("Scène mise à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}