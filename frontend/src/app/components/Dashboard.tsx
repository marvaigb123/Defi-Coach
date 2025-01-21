"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wallet, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { connected, publicKey } = useWallet();
  const [balance, setBalance] = useState("0.00");

  const recommendations = [
    {
      title: "Staking Opportunity",
      description: "Stake your SOL for 6% APY on Marinade Finance",
      action: "Stake Now",
    },
    {
      title: "Portfolio Diversification",
      description: "Consider adding USDC to your portfolio for stability",
      action: "Learn More",
    },
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Connect your wallet",
      completed: connected,
    },
    {
      title: "DeFi Explorer",
      description: "Make your first swap",
      completed: false,
    },
  ];

  // Add error boundary for router navigation
  const handleAICoachClick = () => {
    try {
      router.push("/ai-coach");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to SmartWallet</h1>
        <p className="text-muted-foreground">Your AI-powered DeFi companion</p>
      </div>

      {!connected ? (
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
            <Wallet className="w-12 h-12 text-primary" />
            <h2 className="text-xl font-semibold">Connect Your Wallet</h2>
            <p className="text-center text-muted-foreground">
              Connect your Solana wallet to access all features
            </p>
            <WalletMultiButton className="bg-primary hover:bg-primary/90" />
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">${balance}</div>
              <p className="text-sm text-muted-foreground">
                Wallet: {publicKey?.toBase58().slice(0, 8)}...
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.map((rec, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg">{rec.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{rec.description}</p>
                  <Button className="w-full">
                    {rec.action}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      <Button
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        onClick={handleAICoachClick}
      >
        <MessageCircle className="mr-2" />
        Ask AI Coach
      </Button>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
              {achievement.completed ? (
                <div className="h-8 w-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                  ✓
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-500/20 text-gray-500 flex items-center justify-center">
                  ·
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
