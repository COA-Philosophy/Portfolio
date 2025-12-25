import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string
    subtitle?: string
}

export function SectionHeading({
    title,
    subtitle,
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div className={cn("flex flex-col gap-2 mb-12 select-none", className)}>
            <h2
                className="text-3xl md:text-4xl font-bold tracking-tight relative inline-block"
                {...props}
            >
                <span className="relative z-10">{title}</span>
                <span className="absolute -bottom-1 left-0 h-3 w-12 bg-primary/20 -z-0" />
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg">{subtitle}</p>
            )}
        </div>
    )
}
