import React from "https://esm.sh/react";

type LogoProposType = {
  width?: number;
};

export default function Logo({ width = 75 }: LogoProposType) {
  return <img src="/logo.svg" width={width} title="Aleph.js" />;
}
