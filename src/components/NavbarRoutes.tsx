import { UserButton } from "@clerk/nextjs"

type Props = {}

export default function NavbarRoutes({ }: Props) {
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton />
    </div>
  )
}
