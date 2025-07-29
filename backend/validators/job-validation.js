const { z } = require("zod");

const jobSchema = z.object({
    userID: z
        .string({ required_error: "User ID is required" })
        .trim()
        .min(1, { message: "User ID must not be empty" })
        .regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid User ID format" }), // Validates MongoDB ObjectId format

    company: z
        .string({ required_error: "Company name is required" })
        .trim()
        .min(1, { message: "Company name must not be empty" })
        .max(255, { message: "Company name must not exceed 255 characters" }),

    role: z
        .string({ required_error: "Role is required" })
        .trim()
        .min(1, { message: "Role must not be empty" })
        .max(255, { message: "Role must not exceed 255 characters" }),

    category: z
        .string()
        .max(255, { message: "Category must not exceed 255 characters" })
        .optional(),

    opportunity: z
        .string()
        .max(255, { message: "Opportunity must not exceed 255 characters" })
        .optional(),

    location: z
        .string()
        .max(255, { message: "Location must not exceed 255 characters" })
        .optional(),

    type: z
        .string()
        .max(50, { message: "Type must not exceed 50 characters" })
        .optional(),
        // .refine(
        //     (val) =>
        //         ["Full-Time", "Part-Time", "Internship", "Contract", undefined].includes(val),
        //     { message: "Invalid job type" }
        // ),

    status: z
        .string()
        .max(50, { message: "Status must not exceed 50 characters" })
        .optional(),
        // .refine(
        //     (val) =>
        //         ["Applied", "Interviewing", "Offered", "Rejected", "Accepted", undefined].includes(val),
        //     { message: "Invalid job status" }
        // ),

    date: z
        .string()
        .max(20)
        .optional(),

    person: z
        .string()
        .max(255, { message: "Contact person name must not exceed 255 characters" })
        .optional(),

    link: z
        .string()
        .url({ message: "Invalid URL format" })
        .optional(),
});

module.exports = jobSchema;
