import { SidebarDemo } from "@/components/dashboard/mainDashboard/SidebarDemo";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Fixed sidebar with full height */}
      <div className="lg:w-[350px] fixed w-full h-screen">
        <SidebarDemo />
      </div>

      {/* Content section with left margin to avoid overlap */}
      <div className="p-4 w-full mt-10 lg:ml-[310px]">{children}</div>  
    </div>
  );
};

export default CommonLayout;






