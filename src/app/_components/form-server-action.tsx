import React from "react";
import { Input } from "./input";

function FormServerAction() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const value1 = formData.get("value1");
    const value2 = formData.get("value2");
    console.log(value1, value2);
  }

  return (
    <div>
      <h1>FormServerAction</h1>
      <form className="flex flex-col gap-2" action={handleSubmit}>
        <Input type="text" name="value1" />
        <Input type="text" name="value2" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormServerAction;
