import { Layout } from "@/components/layout/Layout";
import { FeatureCard } from "@/components/home/FeatureCard";
import { MarketTrends } from "@/components/home/MarketTrends";
import { Button } from "@/components/ui/button";
import {
  Zap,
  CircuitBoard,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export function HomePage() {
  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(160,84%,39%)]">
            Your Trusted Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover amazing products from verified sellers around the world.
            Buy and sell with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,48%)]/90">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="border-[hsl(160,84%,39%)] text-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)] hover:text-white">
              Become a Seller
            </Button>
          </div>
        </div>

        {/* Market Trends */}
        <div className="mb-16">
          <MarketTrends />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={Zap}
            title="Fast Delivery"
            description="Lightning-fast delivery with real-time tracking"
            iconColor="text-[hsl(199,89%,48%)]"
          />
          <FeatureCard
            icon={CircuitBoard}
            title="AI-Powered"
            description="Smart recommendations and fraud detection"
            iconColor="text-[hsl(160,84%,39%)]"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Secure Payments"
            description="End-to-end encrypted transactions"
            iconColor="text-[hsl(199,89%,48%)]"
          />
          <FeatureCard
            icon={HeartHandshake}
            title="24/7 Support"
            description="Always here to help you succeed"
            iconColor="text-[hsl(160,84%,39%)]"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(160,84%,39%)]">
            Ready to Start?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of satisfied customers who trust our marketplace.
          </p>
          <Button className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)]/90">
            Create Account
          </Button>
        </div>
      </div>
    </Layout>
  );
}
