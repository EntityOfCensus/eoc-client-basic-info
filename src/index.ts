import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { ClientProfileCreate } from "./endpoints/clientProfileCreate";
import { ContactCreate } from "./endpoints/contactCreate";
import { ContactList } from "./endpoints/contactList";

export const router = OpenAPIRouter({
  docs_url: "/",
});

router.get("/api/tasks/", TaskList);
router.post("/api/tasks/", TaskCreate);
router.get("/api/tasks/:taskSlug/", TaskFetch);
router.delete("/api/tasks/:taskSlug/", TaskDelete);

router.post("/api/client-profile/", ClientProfileCreate);

router.post("/api/contacts/", ContactCreate);
router.get("/api/contacts/", ContactList);

// 404 for everything else
router.all("*", () =>
  Response.json(
    {
      success: false,
      error: "Route not found",
    },
    { status: 404 }
  )
);

export default {
  fetch: router.handle,
};
