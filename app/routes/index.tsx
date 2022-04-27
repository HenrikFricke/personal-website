import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Header } from "../components/Header/Header";
import meData from "../data/me";

export const loader: LoaderFunction = async () => {
  return json(meData);
};

export const meta: MetaFunction = () => ({
  title: `Hi, I’m ${meData.firstName} ${meData.lastName}`,
});

export default function Index() {
  const me = useLoaderData<typeof meData>();

  return (
    <>
      <Header firstName={me.firstName} socials={Object.values(me.socials)} />
    </>
  );
}
