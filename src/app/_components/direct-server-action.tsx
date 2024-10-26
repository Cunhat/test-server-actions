import React from "react";
import DirectForm from "./direct-form";
import FormServerAction from "./form-server-action";

function DirectServerAction() {
  async function handleSubmit(value1: string, value2: string) {
    "use server";
    const total = parseInt(value1) + parseInt(value2);

    console.log(total);
  }

  return (
    <div className="flex flex-col gap-4">
      <DirectForm onSubmit={handleSubmit} />
      <FormServerAction />
    </div>
  );
}

export default DirectServerAction;
