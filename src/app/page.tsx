import Image from "next/image";
import { bgHome } from "@/assets";
import Navigation from "@/components/navigation";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image
                fill
                priority
                src={bgHome}
                sizes="100vw"
                placeholder="blur"
                alt="background-image"
                className="-z-50 w-full h-full object-cover object-center opacity-50"
            />
            <div className="w-full h-screen">
                <Navigation />
            </div>
        </main>
    );
}
