import Header from "../../components/ui/header";

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}