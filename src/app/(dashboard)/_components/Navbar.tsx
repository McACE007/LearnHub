import NavbarRoutes from "@/components/NavbarRoutes"
import MobileSidebar from "./MobileSidebar"

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-md">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}
