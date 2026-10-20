const API = "https://ec.europa.eu/food/food-feed-portal/backend/api";

function flatten(node, out = {}) {
  if (!node || typeof node !== "object") return out;
  if (node.valueIdentifier && node.value != null) out[node.valueIdentifier] = String(node.value);
  for (const child of node.childrenValues || []) flatten(child, out);
  return out;
}

const [operators, policyItems] = await Promise.all([
  fetch(`${API}/fcm_operators`).then(r => r.ok ? r.json() : Promise.reject(new Error(`operators ${r.status}`))),
  fetch(`${API}/policy-items?foodDomain=fcm&authorisationType=fcm_rds`).then(r => r.ok ? r.json() : Promise.reject(new Error(`policy items ${r.status}`)))
]);

const entries = [];
for (const node of operators) {
  const fields = flatten(node);
  if (fields.fcmRon) entries.push({ type: "RON", id: fields.fcmRon, fields });
}
for (const node of policyItems) {
  const fields = flatten(node);
  for (const type of ["RFN", "RIN"]) {
    const key = type === "RFN" ? "fcmRfn" : "fcmRin";
    if (fields[key]) entries.push({ type, id: fields[key], fields });
  }
}

const unique = [...new Map(entries.map(entry => [`${entry.type}:${entry.id}`, entry])).values()];
const payload = { generatedAt: new Date().toISOString(), source: API, entries: unique };
const json = JSON.stringify(payload);
await import("node:fs/promises").then(fs => fs.writeFile(new URL("../data/register-index.json", import.meta.url), json, "utf8"));
process.stdout.write(`Indexed ${unique.length} register references\n`);
