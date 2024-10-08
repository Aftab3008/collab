"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/CreateWorkspaceModal";
import { useEffect, useState } from "react";

export default function Modals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
}
