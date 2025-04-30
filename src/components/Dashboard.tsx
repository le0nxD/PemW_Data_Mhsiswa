import React, { useState } from "react";
import { Users, BookOpen } from "lucide-react";
import StudentForm from "./StudentForm";
import StudentData from "./StudentData";

interface Student {
  npm: string;
  nama: string;
  alamat: string;
  jenisKelamin: string;
  jurusan: string;
  angkatan: string;
}

const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(true);

  const handleAddStudent = (student: Student) => {
    if (window.confirm("Apakah Anda yakin ingin menyimpan data ini?")) {
      setStudents([...students, student]);
      setShowForm(false);
    }
  };

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      label: "Total Mahasiswa",
      value: students.length,
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      label: "Jurusan Aktif",
      value: new Set(students.map((s) => s.jurusan)).size,
    },
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80')] bg-cover bg-fixed py-8 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-br from-white to-emerald-100 p-6 rounded-2xl shadow-xl mr-4 animate-float">
            <img
              src="dist/assets/unsil.png"
              alt="Unsil Icon"
              className="h-14 w-14"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text animate-pulse-slow">
              Universitas Siliwangi
            </h1>
            <p className="text-emerald-600 mt-2 text-lg">
              Sistem Informasi Mahasiswa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl flex items-center space-x-4"
            >
              <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-emerald-700">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:translate-y-[-2px]"
            >
              {showForm ? "Lihat Data Mahasiswa" : "Input Data Mahasiswa"}
            </button>
          </div>

          {showForm ? (
            <StudentForm onSubmit={handleAddStudent} />
          ) : (
            <StudentData students={students} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
