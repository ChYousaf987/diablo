import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteTitle } from '@/constants'

export default function Logo({ className = "", width = 100, height = 35 }) {
  return (
    <Link href="/" className={className}>
      <Image src="/logo.webp" alt={siteTitle} width={width} height={height} />
    </Link>
  );
}
