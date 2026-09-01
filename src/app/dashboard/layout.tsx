import DashboardSidebar from "@/app/dashboard/_components/Sidebar";
import ThemeTrigger from "@/components/ThemeTrigger";
import { buttonVariants } from "@/components/ui/button";
import * as sidebar from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Manage your articles in ArticleHub",
};

const dashboardLayout = ({ children }: LayoutProps<"/dashboard">) => {
  return (
    <sidebar.SidebarProvider defaultOpen>
      <div className="flex w-full">
        <DashboardSidebar />

        <sidebar.SidebarInset className="flex-1">
          <header className="sticky z-50 top-0 bg-sidebar border-b flex justify-between items-center gap-4 px-4 py-2 shadow">
            <sidebar.SidebarTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-lg" }),
              )}
            />

            <ThemeTrigger />
          </header>

          <main className="p-4">{children}</main>
        </sidebar.SidebarInset>
      </div>
    </sidebar.SidebarProvider>
  );
};

export default dashboardLayout;
