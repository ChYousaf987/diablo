"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import EmailLogin from "./EmailLogin";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "./ui/use-toast";

export default function LoginRegister() {
  const { data: session, status } = useSession();

  return (
    <HoverCard closeDelay="1000">
      <HoverCardTrigger>
        <Button size="sm" className="primary-bg-gradient">
          {status === "authenticated" ? "Account" : "Se connecter / Registre"}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-[#15161a]">
        {status === "authenticated" ? (
          <Button className="w-full" onClick={() => signOut()}>
            se déconnecter
          </Button>
        ) : (
          <div className="text-white ">
            <h3>Se connecter/Registre</h3>
            <p className="text-sm font-light my-2">
              pour créer vos propres builds
            </p>
            <Button
              onClick={() => signIn("google")}
              className="bg-[#1a1b1f] w-10 p-0"
            >
              <Image
                src="/google.png"
                width={20}
                height={20}
                alt="google login"
              />
            </Button>
            <p className="text-sm font-light my-2">
              ou obtenez un lien de connexion instantané
            </p>
            <div className="flex justify-center items-center">
              <EmailLogin />
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
