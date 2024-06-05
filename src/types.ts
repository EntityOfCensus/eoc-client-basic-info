import { z } from "zod";

export const TaskSchema = z.object({
	name: z.string().min(1, { message: "Name is required and should be at least 1 character long." }),
	slug: z.string().min(1, { message: "Slug is required and should be at least 1 character long." }),
	description: z.string().optional(),
	completed: z.boolean(),
	due_date: z.string().datetime(),
  });

  export const ContactSchema = z.object({
	id: z.number(),
	date: z.string(),
	type: z.string(),
	description: z.string().optional(),
  });
  
  export const ClientProfileSchema = z.object({
	id: z.number(),
	name: z.string().min(1, { message: "Name is required and should be at least 1 character long." }),
	email: z.string().email({ message: "Invalid email address." }),
	address: z.string().optional(),
	contacts: z.array(ContactSchema).optional(),
  });

