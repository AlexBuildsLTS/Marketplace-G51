import React from "react";
import { Layout } from "@/components/layout/Layout";
import { FeatureCard } from "@/components/home/FeatureCard";
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Your Trusted Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover amazing products from verified sellers around the world.
            Buy and sell with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-accent hover:bg-accent/90">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="border-primary text-primary hover:bg-primary hover:text-white">
              Become a Seller
            </Button>
          </div>
        </div>

        {/* Market Trends */}
        <div className="mb-16">
          {/* Correct the import or component usage here */}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={Zap}
            title="Fast Delivery"
            description="Lightning-fast delivery with real-time tracking"
            iconColor="text-accent"
          />
          <FeatureCard
            icon={CircuitBoard}
            title="AI-Powered"
            description="Smart recommendations and fraud detection"
            iconColor="text-primary"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Secure Payments"
            description="End-to-end encrypted transactions"
            iconColor="text-accent"
          />
          <FeatureCard
            icon={HeartHandshake}
            title="24/7 Support"
            description="Always here to help you succeed"
            iconColor="text-primary"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Ready to Start?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of satisfied customers who trust our marketplace.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Create Account
          </Button>
        </div>
      </div>
    </Layout>
  );
}
