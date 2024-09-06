import { useSession } from "next-auth/react";
import { Providers } from "../providers";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  return <Providers session={session}>{children}</Providers>;
}
