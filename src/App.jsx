"./index.css";

import { Link, Route, Routes } from "react-router-dom";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- بداية شريط التنقل (Navbar) --- */}
      <nav className="bg-indigo-600 shadow-lg fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* الشعار أو اسم التطبيق */}
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-wider">
                Gestion Stagiaires
              </span>
            </div>

            {/* روابط التنقل */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={"/"}
                  className="text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Liste des Stagiaires
                </Link>

                <Link
                  to={"/add"}
                  className="text-indigo-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Ajouter un Stagiaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* --- نهاية شريط التنقل --- */}

      {/* --- حاوية المحتوى الرئيسي (Main Content) --- */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route path={"/"} element={<ListUser />} />
            <Route path={"/add"} element={<AddUser />} />
            {/* هذا المسار يستخدم نفس المكون للإضافة، ستحتاج لاستخدام useParams داخله */}
            <Route path={"/edit/:id"} element={<AddUser />} />
            {/* <Route path={"*"} element={<NotFound />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
