import { Client } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("662d2225000eb7a043d1");

export default client;