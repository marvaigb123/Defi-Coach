"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, MessageCircle, History, Settings } from "lucide-react";
import classNames from "classnames";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black/20 backdrop-blur-lg border-t border-white/10 p-4 md:top-0 md:bottom-auto">
      <div className="container mx-auto flex justify-around items-center">
        <Link
          href="/"
          className={classNames(
            "flex flex-col items-center gap-1 transition-colors",
            {
              "text-primary": isActive("/"),
              "text-gray-400 hover:text-white": !isActive("/"),
            }
          )}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/ai-coach"
          className={classNames(
            "flex flex-col items-center gap-1 transition-colors",
            {
              "text-primary": isActive("/ai-coach"),
              "text-gray-400 hover:text-white": !isActive("/ai-coach"),
            }
          )}
        >
          <MessageCircle size={24} />
          <span className="text-xs">AI Coach</span>
        </Link>
        <Link
          href="/transactions"
          className={classNames(
            "flex flex-col items-center gap-1 transition-colors",
            {
              "text-primary": isActive("/transactions"),
              "text-gray-400 hover:text-white": !isActive("/transactions"),
            }
          )}
        >
          <History size={24} />
          <span className="text-xs">History</span>
        </Link>
        <Link
          href="/settings"
          className={classNames(
            "flex flex-col items-center gap-1 transition-colors",
            {
              "text-primary": isActive("/settings"),
              "text-gray-400 hover:text-white": !isActive("/settings"),
            }
          )}
        >
          <Settings size={24} />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
