import { Button } from "@/components/ui/button";
import Link from "next/link";

const subjectManagement = () => {
    return (
        <div>
            <header>
                <div className="bg-cyan-800 p-3 flex justify-between rounded-md">
                    <h2 className="text-2xl font-bold text-white">
                        Department and Subject list
                    </h2>
                    <Button>
                        <Link href={'subject-management/create-department-subject'}>
                            Create Department And Subject
                        </Link>
                    </Button>
                </div>
            </header>
        </div>
    );
};

export default subjectManagement;