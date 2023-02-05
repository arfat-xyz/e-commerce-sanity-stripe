// import { SanityClient } from "@sanity/client";
import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "next-sanity-image";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "w41ihzck",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
