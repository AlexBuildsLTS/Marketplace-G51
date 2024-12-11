import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "./Overview";
import { Wallet } from "./Wallet";
import { CreateAd } from "./CreateAd";
import { Layout } from "@/components/layout/Layout";
import { useAuthStore } from "@/store/authStore";

export function UserDashboard() {
  const { user } = useAuthStore();
  const isSeller = user?.role === "seller";

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your account
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-background border border-border/40">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            {isSeller && (
              <TabsTrigger value="create-ad">Create Advertisement</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Overview />
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <Wallet />
          </TabsContent>

          {isSeller && (
            <TabsContent value="create-ad" className="space-y-6">
              <CreateAd />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </Layout>
  );
}
