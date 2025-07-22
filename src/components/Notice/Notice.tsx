import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CalendarDays, Contact2 } from "lucide-react";

const NoticeCard = () => {
  return (
    <div className="w-full mx-auto my-10"> {/* Container for full-width control */}
      <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-md" />
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <AlertCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-300">URGENT</span>
          </div>
          
          <div className="space-y-1 pl-4"> {/* Added padding to account for the decorative line */}
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Safety Training Mandatory</CardTitle>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <CardDescription>Due: July 28, 2023 • 5:00 PM</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-4 pl-10"> {/* Adjusted padding for alignment */}
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              All employees must complete the annual safety training program to comply with company policy and OSHA regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Training Portal</p>
                  <p className="text-sm text-muted-foreground">intranet.company.com/training</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Duration</p>
                  <p className="text-sm text-muted-foreground">Approx. 45 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Required For</p>
                  <p className="text-sm text-muted-foreground">All department staff</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Certification</p>
                  <p className="text-sm text-muted-foreground">Valid for 1 year</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-4 pl-10 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Contact2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Contact: </span>
              <span className="font-medium">training@company.com</span>
            </div>
            <div className="flex gap-2">
              <Button className="text-black bg-transparent" variant="outline" size="sm">
                Remind Me Later
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                Start Training
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoticeCard;