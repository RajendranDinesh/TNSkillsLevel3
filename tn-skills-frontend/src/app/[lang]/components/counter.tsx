"use client";

import { useState } from "react";
import { type getDictionary } from "../../../../get-dictionary";
import Button from "./atoms/button";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);
  return (
    <p>
      This component is rendered on client:
      <Button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </Button>
      {count}
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
}
