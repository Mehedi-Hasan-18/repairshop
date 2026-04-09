import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
    </>
  );
}
