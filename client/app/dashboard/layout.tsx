import { Aside } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-8 px-8 py-8 relative">
      <Aside />
      {children}
    </main>
  );
}
