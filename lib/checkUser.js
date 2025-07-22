// Importing the current user from Clerk's server-side module
import { currentUser } from "@clerk/nextjs/server";

// Importing the Prisma database client instance
import { db } from "./prisma";

// Function to check if a user is already in the database or create a new entry
export const checkUser = async () => {
  // Get the currently authenticated user from Clerk
  const user = await currentUser();

  // If no user is logged in, return null
  if (!user) {
    return null;
  }

  try {
    // Check if the user already exists in the database using their Clerk user ID
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // If the user exists in the database, return that user
    if (loggedInUser) {
      return loggedInUser;
    }

    // If the user doesn't exist, construct their full name
    const name = `${user.firstName} ${user.lastName}`;

    // Create a new user record in the database with the Clerk user data
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id, // Unique ID from Clerk
        name, // Full name of the user
        imageUrl: user.imageUrl, // Profile image from Clerk
        email: user.emailAddresses[0].emailAddress, // Primary email address
      },
    });

    // Return the newly created user
    return newUser;
  } catch (error) {
    // Log any errors that occur during the database operations
    console.log(error.message);
  }
};
