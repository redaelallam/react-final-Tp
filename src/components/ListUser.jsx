import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/stagiaires");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteUser(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/stagiaires/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col mt-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {/* --- رأس الجدول --- */}
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nom Complet
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Groupe
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              {/* --- جسم الجدول --- */}
              <tbody className="bg-white divide-y divide-gray-200">
                {/* عرض رسالة إذا لم تكن هناك بيانات */}
                {data.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      Aucun stagiaire trouvé.
                    </td>
                  </tr>
                )}

                {data.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    {/* الاسم والنسب */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* صورة افتراضية (أفاتار) */}
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-lg">
                            {user.nom.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.nom} {user.prenom}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* الإيميل */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>

                    {/* المجموعة (Badge) */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {user.groupe}
                      </span>
                    </td>

                    {/* الأزرار (تعديل وحذف) */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* زر التعديل */}
                      <Link
                        to={`/edit/${user.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4 font-bold"
                      >
                        Éditer
                      </Link>

                      {/* زر الحذف */}
                      <button
                        className="text-red-600 hover:text-red-900 font-bold"
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
