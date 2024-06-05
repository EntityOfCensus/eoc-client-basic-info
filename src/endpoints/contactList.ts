import { OpenAPIRoute, OpenAPIRouteSchema } from "@cloudflare/itty-router-openapi";
import { z } from "zod";
import { ContactSchema } from "../types";

export class ContactList extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Contact"],
    summary: "Get all Contacts",
    responses: {
      "200": {
        description: "Returns a list of contacts",
        schema: {
          success: z.boolean(),
          result: z.array(ContactSchema),
        },
      },
    },
  };

  async handle(request: Request, env: any, context: any, data: Record<string, any>) {
    // TODO: Fetch contacts from the database

    const contacts = [
      { date: "2023-06-04", type: "email", description: "Initial contact" },
      { date: "2023-06-05", type: "call", description: "Follow-up call" },
    ];

    return {
      success: true,
      contacts: contacts,
    };
  }
}
