import { revalidatePath } from "next/cache";

type Handler<A extends unknown[]> = (...args: A) => Promise<Response>;

// After a successful save in the admin panel, clear the cache of the whole site
export function withRevalidate<A extends unknown[]>(handler: Handler<A>) {
  return async (...args: A) => {
    const res = await handler(...args);
    if (res.ok) revalidatePath("/", "layout");
    return res;
  };
}
