import { IdAvis, TitreAvis, ContenuAvis, NoteAvis, IdRestoAvis } from "./backend.mjs";
/*coté avis*/
try {
    const test = await IdAvis("nscyg7oer1i4r1s");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
try {
    const test = await TitreAvis("Généreux et authentique");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
try {
    const test = await ContenuAvis("mezzés copieux, houmous maison, fattoush et brochettes halal. Rien à dire.");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
try {
    const test = await NoteAvis("4");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
try {
    const test = await IdRestoAvis("q838q1crru36hrr");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
/*try {
    const test = await CreatedAvis("nscyg7oer1i4r1s");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }
*/