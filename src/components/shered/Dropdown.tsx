import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    User,
    CreditCard,
    Settings,
    LogOut
} from "lucide-react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

const Dropdown = () => {
    return (
        <div className="relative">
            <DropdownMenu>
                <DropdownMenuTrigger  className="focus:outline-none cursor-pointer">
                    <Avatar className="hover:ring-2 hover:ring-cyan-500 transition-all">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-cyan-600 text-white">CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="mt-5 w-56 p-2 rounded-lg shadow-lg border border-gray-200 bg-white"
                    align="end"
                >
                    <DropdownMenuLabel className="flex items-center gap-2 p-2 text-gray-700">
                        <User className="h-4 w-4 text-cyan-600" />
                        <span>My Account</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-100" />

                    <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-colors">
                        <User className="h-4 w-4 text-cyan-600" />
                        <span>Profile</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-colors">
                        <CreditCard className="h-4 w-4 text-cyan-600" />
                        <span>Billing</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-colors">
                        <Link href={'/main_dashboard'} className="flex justify-center items-center gap-2">  <MdDashboard className="h-4 w-4 text-cyan-600" />
                            <span>Dashboard</span></Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-colors">
                        <Settings className="h-4 w-4 text-cyan-600" />
                        <span>Subscription</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-100" />

                    <DropdownMenuItem className="flex items-center gap-2 p-2 bg-red-900 rounded-md text-white hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-colors">
                        <LogOut className="h-4 w-4 text-white" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Dropdown;