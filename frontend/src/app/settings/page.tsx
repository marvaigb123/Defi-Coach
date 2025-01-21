import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <Card className="bg-black/20 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="ai-notifications">AI Coach Updates</Label>
            <Switch id="ai-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="market-notifications">Market Updates</Label>
            <Switch id="market-notifications" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;