import clsx from "clsx";

export default function Typography({
    children,
    variants,
    className,
}: {
    children: string;
    variants: "title" | "description";
    className?: string;
}) {
    return (
        children && (
            <div
                className={clsx(
                    className,
                    variants === "title"
                        ? "text-foreground text-lg xs:text-xl font-bold tracking-wider"
                        : variants === "description"
                        ? " text-muted text-sm xs:text-base"
                        : "text-sm xs:text-base"
                )}
            >
                {children}
            </div>
        )
    );
}
