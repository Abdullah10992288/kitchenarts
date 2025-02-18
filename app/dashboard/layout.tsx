import DashNav from "@/components/Admin_components/dashNav/dashNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashNav />
      {children}
    </div>
  );
}
