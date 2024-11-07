import * as sdk from "node-appwrite";

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("672a7d30001ba2cab513")
  .setKey(
    "standard_4c4d5e8a58df59f73432ce610c7700c8d932b511599458ba0bcd68da9fc7b026f4aad27f79b4ab0c9cb60d5375b68d710998ddef85d0d4b9d53db0651f0ebc43141ea1ff874d4179f7628a88e457df36ac71e5a7cdc4b5ed11f4b43ac8119bd8ffcf00741827e16f8f148a45151d7b44aa07c3872616819477663143dac1e496"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
