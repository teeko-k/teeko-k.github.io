import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

// title and description are used in the head of the document, and are important for SEO and accessibility. They provide information about the content of the page and help search engines understand what the page is about. The title is typically displayed in the browser tab and search engine results, while the description may be shown in search engine snippets.
export const metadata = {
  title: 'Ahmed Kassem | UX / Product Designer',
  description:
    'UX/UI | Product design | Designing products people actually want to use, across every screen and every scale',
}

// CRITICAL: The viewport meta tag is essential for responsive web design. It controls how the webpage is displayed on different devices, especially mobile devices. By setting the width to 'device-width', it ensures that the page scales correctly to fit the screen size of the device. The initialScale of 1 means that the page will not be zoomed in or out when first loaded. The viewportFit of 'cover' allows the content to extend into the safe area on devices with a notch or rounded corners, providing a more immersive experience.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#09102a" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            var theme = localStorage.getItem('theme') || 'dark';
            document.documentElement.classList.toggle('dark', theme === 'dark');
          } catch(e) {}
        })();
      `,
          }}
        /> */}
        {/* rest of your head tags */}
      </head>
      <body className="bg-color-bg text-text-primary antialiased">
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-red-500"
          style={{ height: 'env(safe-area-inset-top)' }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
