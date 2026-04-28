import { IdAvis } from ".backend.mjs";
try {
    const test = await IdAvis("nscyg7oer1i4r1s");
    console.log("InfoArtiste:", JSON.stringify(test, null, 2));
} catch (e) { console.error(e); }