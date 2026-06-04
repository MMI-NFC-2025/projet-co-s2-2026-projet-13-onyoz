import { addNewUser, getNomsRestaurants, getImagesPrincipales, getImagesGalerie, 
    getRestaurantsHalal, getRestaurantsVege, getRestaurantsGlutten, getRestaurantsFavoris,
     getHorairesOuvertureById, getHorairesFermetureById, getPrixMoyenById, 
     getRestaurantsProches, getRestaurantsPrixCroissant, getRestaurantsPrixDecroissant, 
     getRestaurantsPrixMax, getRestaurantsPrixMin, getNomsAvis, getAvisByRestaurantId, 
    getRestaurantById, getAvisById} from './backend.mjs';

/*user*/
/*
try {
    const newUser = {
        "username": "Michel",
        "email": "michel@test.fr",
        "password": "123456789",
        "passwordConfirm": "123456789",
        "etudiant": true
    };
    const record = await addNewUser(newUser);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*restaurants*/
/*
try {
    const record = await getNomsRestaurants();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getImagesPrincipales();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getImagesGalerie();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsHalal();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsVege();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsGlutten();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsFavoris();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getHorairesOuvertureById("q838q1crru36hrr");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getHorairesFermetureById("q838q1crru36hrr");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getPrixMoyenById("q838q1crru36hrr");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantById("q838q1crru36hrr");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*localisation*/
/* a faire apres
try {
    const record = await getRestaurantsProches(47.2378, 6.0241, 5);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*filtres*/
/*
try {
    const record = await getRestaurantsPrixCroissant();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsPrixDecroissant();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsPrixMax(15);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getRestaurantsPrixMin(12);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*avis*/
/*
try {
    const record = await getNomsAvis();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getAvisByRestaurantId("q838q1crru36hrr");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const record = await getAvisById("nscyg7oer1i4r1s");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/