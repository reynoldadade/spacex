import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="py-10 lg:px-40">{children}</main>
    </div>
  );
}
