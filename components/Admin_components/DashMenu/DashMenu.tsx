import Menu_table from "@/components/Page_components/Menu/Menu_table";
import DashMenuForm from "./DashMenuForm";

export default function DashMenu() {
  return (
    <section className="px-3 sm:px-9 my-5">
      <h2 className="text-[#AD9A74] font-black text-[30px] sm:text-[50px]">
        AddMenu
      </h2>
      <DashMenuForm />
      <Menu_table />
    </section>
  );
}
