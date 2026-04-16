const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>My Dashboard</h1>
      {children}
    </div>
  );
};

export default Layout;
