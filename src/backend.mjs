import PocketBase from 'pocketbase';
const pb = new PocketBase('http://pbonyoz.lucie-garcia.fr');
pb.autoCancellation(false);

/* user */

export async function addNewUser(newUser) {
    const record = await pb.collection('users').create(newUser);
    return record;
}

/* restaurant */

export async function getRestaurantById(id) {
    const record = await pb.collection('restaurants').getOne(id);
    return record;
}

export async function getNomsRestaurants() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants'
    });
    return records;
}

export async function getImagesPrincipales() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants, images_principale'
    });
    return records;
}

export async function getImagesGalerie() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants, images'
    });
    return records;
}

export async function getRestaurantsHalal() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants, halal'
    });
    return records;
}

export async function getRestaurantsVege() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants, vege'
    });
    return records;
}

export async function getRestaurantsGlutten() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'nom_restaurants, glutten'
    });
    return records;
}

export async function getRestaurantsFavoris() {
    const records = await pb.collection('restaurants').getFullList({
        fields: 'id,nom_restaurants, favoris'
    });
    return records;
}

export async function getHorairesOuvertureById(id) {
    const record = await pb.collection('restaurants').getOne(id, {
        fields: 'nom_restaurants, horaires_ouvertures'
    });
    return record;
}

export async function getHorairesFermetureById(id) {
    const record = await pb.collection('restaurants').getOne(id, {
        fields: 'nom_restaurants, horaires_fermetures'
    });
    return record;
}

export async function getPrixMoyenById(id) {
    const record = await pb.collection('restaurants').getOne(id, {
        fields: 'nom_restaurants, prix_moyen'
    });
    return record;
}

/*fonction localisation ia*/
export async function getRestaurantsProches(lat, lon, distanceKm = 5) {
    const records = await pb.collection('restaurants').getFullList();
    const restaurantsProches = records.filter(resto => {

        // On accède directement aux propriétés lon et lat de l'objet
        const restoLon = resto.localisation.lon;
        const restoLat = resto.localisation.lat;

        const R = 6371;
        const dLat = (restoLat - lat) * Math.PI / 180;
        const dLon = (restoLon - lon) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat * Math.PI / 180) * Math.cos(restoLat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return distance <= distanceKm;
    });
    return restaurantsProches;
}

/*filtre*/
export async function getRestaurantsPrixCroissant() {
    const records = await pb.collection('restaurants').getFullList({
        sort: 'prix_moyen'
    });
    return records;
}

export async function getRestaurantsPrixDecroissant() {
    const records = await pb.collection('restaurants').getFullList({
        sort: '-prix_moyen'
    });
    return records;
}

export async function getRestaurantsPrixMax(prixMax) {
    const records = await pb.collection('restaurants').getFullList({
        filter: `prix_moyen <= ${prixMax}`,
        sort: 'prix_moyen'
    });
    return records;
}

export async function getRestaurantsPrixMin(prixMin) {
    const records = await pb.collection('restaurants').getFullList({
        filter: `prix_moyen >= ${prixMin}`,
        sort: 'prix_moyen'
    });
    return records;
}

/* avis */

export async function getNomsAvis() {
    const records = await pb.collection('avis').getFullList({
        fields: 'titre_avis'
    });
    return records;
}

export async function getAvisByRestaurantId(restaurantId) {
    const records = await pb.collection('avis').getFullList({
        filter: `restaurants_avis = "${restaurantId}"`
    });
    return records;
}

export async function getAvisById(id) {
    const record = await pb.collection('avis').getOne(id);
    return record;
}