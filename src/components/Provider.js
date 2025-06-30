"use client";
import React, { useRef } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from "@/components/ui/toaster";
import { makeStore, wrapper } from "@/store";
import { Provider as ProviderStore } from "react-redux";


export default function Provider({ children }) {

  const storeRef = useRef()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  

  return (
    
    <SessionProvider>
      <ProviderStore store={storeRef.current}>
      {children}
      <Toaster />
    </ProviderStore>
    </SessionProvider>
  );
}
