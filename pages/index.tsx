import { Import } from "https://deno.land/x/aleph/mod.ts";
import React from "https://esm.sh/react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="page">
      <Import from="../style/index.less" />
      <h1>
        Deno <strong>Aleph.js</strong>!
      </h1>
      <p className="counter">
        <span>Counter:</span>
        <strong>{count}</strong>
        <button onClick={() => setCount(n => n - 1)}>-</button>
        <button onClick={() => setCount(n => n + 1)}>+</button>
      </p>
    </div>
  );
}
