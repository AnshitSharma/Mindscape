import { Account, Client, Databases } from "appwrite";

// Browser SDK only. This app runs entirely in the browser, so it must never hold
// an Appwrite API key: anything bundled here is public. The endpoint and project
// ID are public identifiers, and every request runs as the signed-in user.
const endpoint =
  import.meta.env.VITE_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1";
const projectId =
  import.meta.env.VITE_APPWRITE_PROJECT_ID ?? "672a7d30001ba2cab513";

const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);
