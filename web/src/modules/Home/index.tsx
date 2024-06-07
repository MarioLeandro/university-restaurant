"use client";

import React, { useState } from "react";
import UiHome from "./ui/ui-home";

export default function FeatureHome() {
  const prices = {
    dinner: Number(process.env.NEXT_PUBLIC_DINNER_PRICE),
    lunch: Number(process.env.NEXT_PUBLIC_LUNCH_PRICE),
  };

  const [quantities, setQuantities] = useState({
    dinner: 0,
    lunch: 0,
  });

  const handleApplyFilters = (turn: "lunch" | "dinner", date: Date) => {
    console.log(turn, date);
  };

  return (
    <UiHome
      handleApplyFilters={handleApplyFilters}
      quantities={quantities}
      prices={prices}
      setQuantities={setQuantities}
    />
  );
}
