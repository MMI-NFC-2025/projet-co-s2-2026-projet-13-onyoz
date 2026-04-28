import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090');
export { pb };

export async function IdAvis(id) {
    const test = await pb.collection("avis").getOne(id);
    return test;
}