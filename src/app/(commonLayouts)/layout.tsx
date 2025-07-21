import { Navbar1 } from "@/components/NavberAndFooter/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar1/>
      <div className="min-h-screen">{children}</div>
    
    </div>
  );
};

export default CommonLayout;