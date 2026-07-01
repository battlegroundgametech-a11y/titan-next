import "./globals.css";

export const metadata = {
  title: "Titan",
  description: "Premium crypto credit card platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
