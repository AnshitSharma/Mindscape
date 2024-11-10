import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

declare interface SignInParams {
  email: string;
  password: string;
}


export const signInUser = async (credentials: SignInParams) => {
  try {
    // First check if user exists
    const existingUsers = await users.list([
      Query.equal("email", [credentials.email]),
    ]);

    if (existingUsers.users.length === 0) {
      throw new Error("User not found");
    }

    // Create an authentication session
    const session = await users.createSession(
      existingUsers.users[0].$id
    );
    if (session) {
      const user = await users.get(session.userId);
      return user;
    }
  } catch (error: any) {
    if (error?.code === 401) {
      throw new Error("Invalid credentials");
    }
    console.error("An error occurred during sign in:", error);
    throw error;
  }
};
