const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <h1 className="bg-amber-200 p-1">Main Navbar</h1> {children}
    </div>
  );
};

export default Layout;
