import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// Import Cairo font - a modern Arabic Google font with good readability
const cairoFont = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});
export const metadata: Metadata = {
  title: "مجلة شروع",
  description: "منصة رقمية متخصصة في مجالات إدارة المشاريع، القيادة، التحول الرقمي، والابتكار، تقدم محتوى عربي احترافي مدعوم بدراسات حالة وأبحاث متعمقة للمهنيين والقادة",
};
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={`${cairoFont.variable} font-cairo antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}