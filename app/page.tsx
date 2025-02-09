import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Main Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the main content of your page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
