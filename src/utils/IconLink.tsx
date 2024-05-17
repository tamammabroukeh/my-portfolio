import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export default function IconLink({
    children,
    href,
    title,
    target,
}: {
    children: ReactNode;
    href: string;
    title: string;
    target?: HTMLAttributeAnchorTarget;
}) {
    // const NavLink = motion(Link);
    return (
        <Link
            // variants={{
            //     hidden: { scale: 0 },
            //     show: { scale: 1 },
            // }}
            href={href}
            target={target}
            className="text-foreground rounded-full flex items-center justify-center"
            aria-label={title}
            // prefetch={false}
            // scroll={false}
        >
            <span className="relative w-4 h-4 hover:text-accent">
                {children}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                    {title}
                </span>
            </span>
        </Link>
    );
}
