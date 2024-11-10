import { ID } from "node-appwrite";
import { databases } from "../appwrite.config";
import { Appointment } from "../types/appointment";


export const createAppointment = async (appointment: Appointment) => {
    try {
        const newAppointment =  await databases.createDocument(
            "672a7ddd0000c450a5d6","672a7e81003bb8e0c91e",
            ID.unique(),
            appointment
        )
        return newAppointment;
    } catch (error) {
        console.log(error);
    }
}
