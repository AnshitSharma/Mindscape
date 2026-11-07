import { AppwriteException } from "appwrite";
import { account } from "../appwrite.config";

interface SignInParams {
  email: string;
  password: string;
}

// Appwrite checks the password and returns the same 401 for an unknown email
// and a wrong password, so the form can't be used to find out who has an account.
export const signInUser = async ({ email, password }: SignInParams) => {
  // Appwrite refuses a new session while one is active, so end any old one first.
  await signOutUser();
  try {
    await account.createEmailPasswordSession(email, password);
    return await account.get();
  } catch (error) {
    if (error instanceof AppwriteException) {
      if (error.code === 401) throw new Error("Invalid credentials");
      if (error.code === 429) throw new Error("Too many attempts");
    }
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};

export const signOutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch {
    // No active session.
  }
};
