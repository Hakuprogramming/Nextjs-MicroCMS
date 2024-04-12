import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'blog-test-cms',
    apiKey: process.env.API_KEY
})