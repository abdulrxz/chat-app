import { Client,Databases,Account } from 'appwrite';

export const PROJECT_ID = '650144a4755cd9532469';
export const DATABASE_ID = '650145da487b722665b5';
export const COLLECTION_ID_MESSAGES = '650149b827cfdd02c965'; 

const client = new Client();
export const account = new Account(client)
export const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('650144a4755cd9532469');

export default client    