import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CAlert({title="", description="", children=null}) {
  return (
    <Alert className="my-3 bg-[#1a1b1f]">
      {children}
      <AlertTitle className="text-sm font-semibold text-white mb-0">
        {title}
      </AlertTitle>
      <AlertDescription className="text-sm font-semibold text-white">
        {description}
      </AlertDescription>
    </Alert>
  );
}
