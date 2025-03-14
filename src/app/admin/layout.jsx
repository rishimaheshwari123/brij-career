import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import Sidebar from "@/components/admin/pages/Sidebar";

function layout({ children }) {
  return (
    <PrivateRoute>
      <div className="from-gray-200 to-gray-400">
        <Sidebar />
        <div className="lg:ml-24 mx-5 mt-3 ml-[100px] min-h-screen  ">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default layout;
