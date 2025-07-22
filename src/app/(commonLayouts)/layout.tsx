import { Footer7 } from "@/components/NavberAndFooter/Footer";
import { Navbar1 } from "@/components/NavberAndFooter/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar1/>
      <div className="min-h-screen">{children}</div>
    <Footer7/>
    </div>
  );
};

export default CommonLayout;