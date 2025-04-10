"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-lg bg-background/80 border-b border-primary/10">
      <div className="container mx-auto max-w-6xl py-4 px-6 md:py-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-center">
          <div className="flex flex-1 justify-start items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
            <div className="h-16 w-80 relative">
                <Image 
                  src="/Shuru-white-logo.svg" 
                  alt="شعار مجلة شروع" 
                  fill
                  className="object-contain dark:hidden"
                  priority
                />
                <Image 
                  src="/Shuru-black-logo.svg" 
                  alt="شعار مجلة شروع" 
                  fill
                  className="object-contain hidden dark:block"
                  priority
                />
              </div>
            </Link>
          </div>
          
          <div className="flex flex-1 justify-end items-center gap-6">
            <div className="hidden sm:flex gap-8 items-center">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                عن المجلة
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                تواصل معنا
              </Link>
            </div>
            <div className="h-6 w-px bg-muted-foreground/20 hidden sm:block mx-2"></div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header