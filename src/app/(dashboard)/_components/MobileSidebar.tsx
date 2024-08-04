import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"

type Props = {}

export default function MobileSidebar({ }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 bg-white" side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
