"use client";

import {
  FileText,
  LayoutDashboard,
  PenSquare,
  Settings,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/articles", label: "Articles", icon: FileText },
  { href: "/write", label: "Write", icon: PenSquare },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r shadow" collapsible="icon">
      <SidebarHeader className="px-4 pt-6">
        <SidebarMenu>
          <SidebarMenuItem className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-data-[collapsible=icon]:hidden">
            Dashboard
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-2 py-4">
          <SidebarMenu className="gap-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive =
                pathname === href ||
                (href !== "/dashboard" && pathname.startsWith(`${href}/`));

              return (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    render={<Link href={href} />}
                    isActive={isActive}
                    tooltip={label}
                  >
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-fit group-data-[collapsible=icon]:justify-center"
              render={<Link href="/dashboard/settings" />}
              tooltip="Settings"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="author avatar"
                />
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>

              <span className="text-nowrap group-data-[collapsible=icon]:hidden">
                John Doe
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
