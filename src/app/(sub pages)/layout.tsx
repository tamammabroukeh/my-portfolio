import { IChildren } from "@/interfaces/interfaces";
import HomeBtn from "@/components/HomeBtn";
export default function SubPagesLayout({ children }: IChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-6 lg:px-24 xl:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}
