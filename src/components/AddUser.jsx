import { useEffect, useState } from "react";
import axios from "axios";
import { data, useNavigate, useParams } from "react-router-dom";

export default function AddUser() {
  const navgate = useNavigate();
  const { id } = useParams();
  const [newUser, setNewUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    groupe: "",
  });
  async function addUser() {
    try {
      await axios.post("http://127.0.0.1:8000/api/stagiaires", newUser);
      navgate("/");
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchOldUser() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/stagiaires/${id}`
      );
      setNewUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function editeUser() {
    try {
      await axios.put(`http://127.0.0.1:8000/api/stagiaires/${id}`, newUser);
      navgate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) fetchOldUser();
  }, []);

  return (
    // الخلفية العامة للصفحة
    <div className="h-full bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* عنوان الصفحة */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ajouter un Stagiaire
        </h2>
      </div>

      {/* الكارد الأبيض الذي يحتوي النموذج */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* حقل الاسم (Nom) */}
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newUser.nom}
                  onChange={(e) =>
                    setNewUser({ ...newUser, nom: e.target.value })
                  }
                />
              </div>
            </div>

            {/* حقل النسب (Prenom) */}
            <div>
              <label
                htmlFor="prenom"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <div className="mt-1">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newUser.prenom}
                  onChange={(e) =>
                    setNewUser({ ...newUser, prenom: e.target.value })
                  }
                />
              </div>
            </div>

            {/* حقل الإيميل */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email" // تم التصحيح هنا
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* حقل المجموعة (Groupe) */}
            <div>
              <label
                htmlFor="groupe"
                className="block text-sm font-medium text-gray-700"
              >
                Groupe
              </label>
              <div className="mt-1">
                <input
                  id="groupe"
                  name="groupe"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newUser.groupe}
                  onChange={(e) =>
                    setNewUser({ ...newUser, groupe: e.target.value })
                  }
                />
              </div>
            </div>

            {/* زر الإضافة */}
            <div>
              <button
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                onClick={() => {
                  id ? editeUser() : addUser();
                }}
              >
                {id ? "Modifer" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
