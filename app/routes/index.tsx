import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Header } from "../components/Header/Header";
import meData from "../data/me";

export const loader: LoaderFunction = async () => {
  return json(meData);
};

const title = `Hi, I’m ${meData.firstName} ${meData.lastName}`;
const socialShareImage = "https://henrikfricke.dev/img/social.jpg";
const description =
  "I’m a web enthusiast. I love to talk about web technologies, learn something new every day, and make the world just a little better.";

export const meta: MetaFunction = () => ({
  title,
  "og:title": title,
  "twitter:card": "summary_large_image",
  "twitter:description": description,
  "twitter:title": title,
  "twitter:site": "@henrik_fricke",
  "twitter:image": socialShareImage,
  "og:url": "https://henrikfricke.dev",
  description: {
    name: "description",
    property: "og:description",
    content: description,
  },
  image: {
    name: "image",
    property: "og:image",
    content: socialShareImage,
  },
  type: {
    property: "og:type",
    content: "website",
  },
});

export default function Index() {
  const me = useLoaderData<typeof meData>();

  return (
    <>
      <Header firstName={me.firstName} socials={Object.values(me.socials)} />
    </>
  );
}
