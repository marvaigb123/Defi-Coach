"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const AICoach = () => {
  const [message, setMessage] = useState("");

  const suggestions = [
    "What should I invest in today?",
    "Explain Solana staking to me",
    "What are gas fees, and how can I save?",
  ];

  return (
    <div className="space-y-4 pb-20 md:pb-0">
      <h1 className="text-3xl font-bold">AI Coach</h1>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            className="whitespace-nowrap bg-black/20 backdrop-blur-lg border-white/10"
            onClick={() => setMessage(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>

      <Card className="bg-black/20 backdrop-blur-lg border-white/10 min-h-[400px]">
        <CardContent className="p-4">
          <p className="text-center text-muted-foreground">
            Ask me anything about DeFi and crypto
          </p>
        </CardContent>
      </Card>

      <div className="fixed bottom-20 left-0 right-0 p-4 md:relative md:bottom-0">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your question..."
            className="bg-black/20 backdrop-blur-lg border-white/10"
          />
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
