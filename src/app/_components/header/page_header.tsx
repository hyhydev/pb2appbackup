// import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./first_section";
import { PageHeaderForm } from "./form";
import { PageHeaderSecondSection } from "./second_section";

export function PageHeader() {
  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <PageHeaderFirstSection />
      <PageHeaderForm />
      <PageHeaderSecondSection />
    </div>
  );
}
