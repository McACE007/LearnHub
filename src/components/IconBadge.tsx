import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react";


const backgroundVariant = cva("rounded-full flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-sky-100",
      success: "bg-emerald-100",
    },
    size: {
      default: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const iconVariant = cva("", {
  variants: {
    variant: {
      default: "bg-sky-100",
      success: "bg-emerald-100",
    },
    size: {
      default: "h-8 w-8",
      sm: 'h-4 w-4',
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
})

type BackgroundVariantProps = VariantProps<typeof backgroundVariant>;
type IconVariantProps = VariantProps<typeof iconVariant>;

type Props = BackgroundVariantProps & IconVariantProps & {
  icon: LucideIcon;
}

export default function IconBadge({ icon: Icon, variant, size }: Props) {
  return (
    <div className={cn(backgroundVariant({ variant, size }))}>
      <Icon className={cn(iconVariant({ variant, size }))} />
    </div>
  )
}
