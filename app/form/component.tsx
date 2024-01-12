"use client";

import { addName } from "#/app/form/action";
import { startTransition, useOptimistic } from "react";
import { useFormState } from "react-dom";
import invariant from "tiny-invariant";

export const Form = () => {
  const [state, addNewName] = useFormState(addName, {
    namesList: [],
    error: undefined,
  });

  const [namesList, addOptimisticNewName] = useOptimistic(
    state.namesList,
    (namesList, name: string) => [...namesList, name]
  );

  return (
    <div className="flex flex-col gap-3 items-start">
      <form
        onSubmit={(event) => {
          const input = event.currentTarget.elements.namedItem("name");

          invariant(input instanceof HTMLInputElement);

          const newName = input.value;

          startTransition(() => {
            addOptimisticNewName(newName);
          });
        }}
        action={addNewName}
        className="flex flex-col gap-3 items-start"
      >
        <label htmlFor="name">Enter name</label>
        <input className="text-black" id="name" name="name" />
        {state.error}
        <button>Submit</button>
      </form>
      <ul className="flex flex-col gap-3 items-start">
        {namesList.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
