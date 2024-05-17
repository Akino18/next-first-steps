import { Navbar } from "@/components";
import Link from "next/link";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar/> */}
      <div className="flex flex-col items-center p-24">
        <h1>Hello Root Layout About</h1>
        <Link href={"f"}></Link>
        {children}
      </div>    
    </>
  );
}