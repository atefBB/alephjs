import React, { ComponentType } from "https://esm.sh/react";
import { Head } from "https://deno.land/x/aleph/mod.ts";

type AppProposType = { Page: ComponentType<any>; pageProps: any };

export default function App({ Page, pageProps }: AppProposType) {
  return (
    <>
      <Head>
        <title>Deno Alephjs</title>
      </Head>
      <Page {...pageProps} />
    </>
  );
}
