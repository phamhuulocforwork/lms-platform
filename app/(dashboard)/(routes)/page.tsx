import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Main page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
