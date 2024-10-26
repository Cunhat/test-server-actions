"use client";

import React, { useState } from "react";
import { Input } from "./input";

export default function DirectForm({
  onSubmit,
}: {
  onSubmit: (value1: string, value2: string) => void;
}) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <h1>DirectForm</h1>
      <Input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={() => onSubmit(value1, value2)}>Submit</button>
    </div>
  );
}
