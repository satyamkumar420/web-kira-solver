import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role: "user" | "admin";
      /** The user's ID from the database. */
      id: string;
    } & DefaultSession["user"];
    accessToken?: string;
    provider?: string;
    error?: string;
  }

  interface User {
    role?: "user" | "admin";
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The user's role */
    role?: "user" | "admin";
    /** The user's ID from the database. */
    id?: string;
    accessToken?: string;
    provider?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
}
