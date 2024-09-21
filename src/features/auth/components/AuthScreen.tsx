"use client";

import { SignInFlow } from "@/types";
import { useState } from "react";
import { SignInCard } from "./SignInCard";
import { SignUpCard } from "./SignUpCard";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="flex h-full items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
