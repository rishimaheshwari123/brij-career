"use client";
import Dashboard from "@/components/admin/pages/Dashboard";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
