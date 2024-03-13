import { Todo, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Todo).values([
    { id: 1, body: "Buy milk", completed: false },
    { id: 2, body: "Walk the dog", completed: false },
    { id: 3, body: "Feed the cat", completed: false },
  ]);
}
