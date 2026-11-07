import { AppwriteException, ID } from "appwrite";
import { account } from "../appwrite.config";
import { signInUser } from "./auth.actions";

interface CreateUserParams {
  email: string;
  name: string;
  password: string;
  phone: string;
}

// Creates the account, signs the new user in, then saves their phone number
// (Appwrite only lets a signed-in user set their own phone).
export const createUser = async ({ email, name, password, phone }: CreateUserParams) => {
  try {
    await account.create(ID.unique(), email, password, name);
  } catch (error) {
    if (error instanceof AppwriteException && error.code === 409) {
      throw new Error("Account exists");
    }
    throw error;
  }

  const user = await signInUser({ email, password });
  try {
    await account.updatePhone(phone, password);
  } catch (error) {
    // The account is usable without a phone number, so don't fail sign-up over it.
    console.warn("Could not save phone number:", error);
  }
  return user;
};
