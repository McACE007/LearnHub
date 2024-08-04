"use client"

import { Compass, Layout } from "lucide-react"
import SidebarItem from "./SidebarItem";

type Props = {}

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
]

export default function SidebarRoutes({ }: Props) {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map(route => (
        <SidebarItem key={route.href} icon={route.icon} href={route.href} label={route.label} />
      ))}
    </div>
  )
}