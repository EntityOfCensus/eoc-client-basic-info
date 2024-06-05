import { OpenAPIRoute, OpenAPIRouteSchema } from "@cloudflare/itty-router-openapi";
import { ClientProfileSchema } from "../types"; 
import { z } from "zod";

export class ClientProfileCreate extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["ClientProfile"],
    summary: "Create a new Client Profile",
    requestBody: ClientProfileSchema,
    responses: {
      "200": {
        description: "Returns the created client profile",
        schema: {
          success: z.boolean(),
          result: ClientProfileSchema,
        },
      },
    },
  };

  async handle(request: Request, env: any, context: any, data: Record<string, any>) {
    const profileToCreate = data.body;

    // Insert profileToCreate into the database

    return {
      success: true,
      profile: profileToCreate,
    };
  }
}
