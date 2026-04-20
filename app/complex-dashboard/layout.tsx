import Notification from "./notification/page";
import User from "./user/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 bg-amber-50 mb-6">
          Complex Dashboard
        </h1>
      </div>
      {children}
      <div className="flex items-center gap-4">
        <div className="w-64 h-full p-4 bg-gray-100 rounded-2xl shadow-md border">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Sidebar</h2>
          <p className="text-sm text-gray-500">
            Navigation and additional options
          </p>
        </div>
        <Notification />
        <User />
      </div>
    </div>
  );
};

export default Layout;
