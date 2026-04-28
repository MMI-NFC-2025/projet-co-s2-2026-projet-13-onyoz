import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090');
export { pb };

/*coté avis*/
export async function IdAvis(id) {
    const test = await pb.collection("avis").getOne(id);
    return test;
}
export async function TitreAvis(titre_avis) {
    const test = await pb.collection("avis").getOne(titre_avis);
    return test;
}
export async function ContenuAvis(contenu_avis) {
    const test = await pb.collection("avis").getOne(contenu_avis);
    return test;
}
export async function NoteAvis(note) {
    const test = await pb.collection("avis").getOne(note);
    return test;
}
export async function IdRestoAvis(avis_restaurant) {
    const test = await pb.collection("avis").getOne(avis_restaurant);
    return test;
}
/*export async function CreatedAvis(created) {
    const test = await pb.collection("avis").getOne(created);
    return test;
}*/

/*coté restaurant*/
export async function FavorisRestaurant(id, valeur) {
    try {
        const record = await pb.collection("restaurants").update(id, { favoris: valeur });
        return { success: true, record };
    } catch (error) {
        return { success: false, message: error.message };
    }
}
export async function IdRestaurant(id) {
    const test = await pb.collection("restaurants").getOne(id);
    return test;
}
export async function NomRestaurant(nom_restaurant) {
    const test = await pb.collection("restaurants").getOne(nom_restaurant);
    return test;
}
export async function LocalisationRestaurant(localisation_restaurant) {
    const test = await pb.collection("restaurants").getOne(localisation_restaurant);
    return test;
}
export async function OpenRestaurant(horaires_ouvertures) {
    const test = await pb.collection("restaurants").getOne(horaires_ouvertures);
    return test;
}
export async function CloseRestaurant(horaires_fermetures) {
    const test = await pb.collection("restaurants").getOne(horaires_fermetures);
    return test;
}
export async function PrixRestaurant(prix_moyen) {
    const test = await pb.collection("restaurants").getFullList(prix_moyen);
    return test;
}
/*manque halal et doit vérifier si fullList ou non*/
export async function IdAvisRestaurant(restaurant_avis) {
    const test = await pb.collection("restaurants").getFullList(restaurant_avis);
    return test;
}
/*export async function CreatedRestaurant(created) {
    const test = await pb.collection("restaurants").getOne(created);
    return test;
}*/



/*coté user*/