// app/layout.tsx
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PortfolioSidebar } from "@/components/main-components/PortfolioSidebar"
import { Geist_Mono, Roboto, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/components/MotionContext"
import { AnimationWrapper } from "@/components/AnimationWrapper"
import { cn } from "@/lib/utils"
import { Metadata } from 'next'
import Footer from "@/components/main-components/Footer"

/**
 * Global Metadata Configuration
 * 
 * Defines the default page titles and descriptions for search engine optimization (SEO).
 */
export const metadata: Metadata = {
  title: { default: 'Kieran Pritchard', template: '%s | Kieran Pritchard' },
  description: 'Software student focused on ethical hacking and secure development.',
}

/**
 * Font Initialization
 * 
 * Configures Google Fonts with CSS variables for seamless integration with Tailwind CSS.
 */
const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

/**
 * RootLayout Component
 * 
 * The primary layout wrapper for the entire application.
 * It initializes global providers (Theme, Motion, Tooltip, Sidebar), 
 * sets up the navigation structure, and defines the global font styling.
 * 
 * @param children - The active page content to be rendered within the layout.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased overflow-x-hidden", fontMono.variable, roboto.variable, notoSansHeading.variable)}>
        {/* MotionProvider: Manages global animation toggle state */}
        <MotionProvider>
          {/* AnimationWrapper: Conditionally enables/disables Framer Motion animations */}
          <AnimationWrapper>
            {/* ThemeProvider: Manages light/dark mode with system preference support */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {/* TooltipProvider: Required for Radix UI tooltip components */}
              <TooltipProvider delayDuration={0}>
                {/* SidebarProvider: Orchestrates the collapsible navigation sidebar */}
                <SidebarProvider>
                  <PortfolioSidebar />
                  <SidebarInset className="min-w-0">
                    {/* Sticky Global Header */}
                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between px-4 bg-background/50 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                      </div>
                    </header>
                    {/* Main Content Area */}
                    <main className="flex flex-1 flex-col gap-4 p-4 md:p-8 min-w-0">
                      {children}
                    </main>
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

