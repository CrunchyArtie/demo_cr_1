#!/usr/bin/env -S deno run -A --watch=static/,routes/
// C'est le point d'entrée de l'application quand tu est en développement.
// On peut changer son nom mais l'appeler dev.ts est une convention.
import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
