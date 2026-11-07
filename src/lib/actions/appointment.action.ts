import { ID, Permission, Role } from "appwrite";
import { account, databases } from "../appwrite.config";
import { Appointment } from "../types/appointment";

const DATABASE_ID = "672a7ddd0000c450a5d6";
const APPOINTMENTS_COLLECTION_ID = "672a7e81003bb8e0c91e";

// Runs as the signed-in user, and only that user can read or change the document.
// Needs "create" for the Users role on the collection in the Appwrite console.
export const createAppointment = async (appointment: Appointment) => {
  const user = await account.get();
  const owner = Role.user(user.$id);
  return databases.createDocument(
    DATABASE_ID,
    APPOINTMENTS_COLLECTION_ID,
    ID.unique(),
    appointment,
    [Permission.read(owner), Permission.update(owner), Permission.delete(owner)]
  );
};
