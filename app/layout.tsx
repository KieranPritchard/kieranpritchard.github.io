// app/layout.tsx
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PortfolioSidebar } from "@/components/main-components/portfolio-sidebar"
import { Geist_Mono, Roboto, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/components/MotionContext"
import { AnimationWrapper } from "@/components/AnimationWrapper"
import { AnimationToggle } from "@/components/main-components/AnimationToggle"
import { cn } from "@/lib/utils"
import { Metadata } from 'next'
import Footer from "@/components/main-components/Footer"

// Define site metadata for SEO
export const metadata: Metadata = {
  title: { default: 'Kieran Pritchard', template: '%s | Kieran Pritchard' },
  description: 'Software student focused on ethical hacking and secure dev.',
}

// Initialize fonts with CSS variables for global use in Tailwind
const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased overflow-x-hidden", fontMono.variable, roboto.variable, notoSansHeading.variable)}>
        {/* MotionProvider handles the global state for animation toggling */}
        <MotionProvider>
          {/* AnimationWrapper applies the MotionConfig logic based on the provider state */}
          <AnimationWrapper>
            {/* ThemeProvider manages light/dark mode persistence */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {/* TooltipProvider ensures accessible tooltips are available globally */}
              <TooltipProvider delayDuration={0}>
                {/* SidebarProvider enables sidebar state management */}
                <SidebarProvider>
                  <PortfolioSidebar />
                  <SidebarInset className="min-w-0">
                    {/* Header containing navigation triggers and the animation toggle */}
                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                      </div>
                    </header>
                    {/* Main content area */}
                    <div className="flex flex-1 flex-col gap-4 p-4 md:p-8 min-w-0">
                      {children}
                    </div>
                    {/* Application footer */}
                    <Footer />
                  </SidebarInset>
                </SidebarProvider>
              </TooltipProvider>
            </ThemeProvider>
          </AnimationWrapper>
        </MotionProvider>
      </body>
    </html>
  )
}
