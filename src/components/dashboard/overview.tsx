import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
  return (
    <div className="pt-6 pb-4 px-6 max-w-screen-2xl">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-[20px]">Overview</h2>
        <Select>
          <SelectTrigger className="w-fit min-w-[140px] text-[#4D4D4D] text-[16px] py-0.5 bg-white border border-stone-200 rounded-sm">
            <SelectValue placeholder="Last Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="current-month">Current Month</SelectItem>
            <SelectItem value="next-month">Next Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Card className="bg-white rounded-lg w-full border-none shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
          <CardHeader>
            <CardTitle className="text-md text-[#4D4D4D] font-light">
              Online Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">231</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-lg w-full border-none shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
          <CardHeader>
            <CardTitle className="text-md text-[#4D4D4D] font-light">
              Amount Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">₹23,92,312.19</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
