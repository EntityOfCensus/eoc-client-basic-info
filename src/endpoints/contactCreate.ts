import { OpenAPIRoute, OpenAPIRouteSchema } from "@cloudflare/itty-router-openapi";
import { z } from "zod";

export const Contact = z.object({
  date: z.string(),
  type: z.string(),
  description: z.string().optional(),
});

export class ContactCreate extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Contact"],
    summary: "Create a new Contact",
    requestBody: Contact,
    responses: {
      "200": {
        description: "Returns the created contact",
        schema: {
          success: z.boolean(),
          result: Contact,
        },
      },
    },
  };

  async handle(request: Request, env: any, context: any, data: Record<string, any>) {
    const contactToCreate = data.body;

    // Insert contactToCreate into the database

    return {
      success: true,
      contact: contactToCreate,
    };
  }
}
