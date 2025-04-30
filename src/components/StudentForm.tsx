import React, { useState } from "react";
import { UserPlus, Mail, Home, Users, Calendar } from "lucide-react";

interface StudentFormProps {
  onSubmit: (student: {
    npm: string;
    nama: string;
    alamat: string;
    jenisKelamin: string;
    jurusan: string;
    angkatan: string;
  }) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    npm: "",
    nama: "",
    alamat: "",
    jenisKelamin: "",
    jurusan: "",
    angkatan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-100 mb-4">
          <UserPlus className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text">
          Form Input Data Mahasiswa
        </h2>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-2 font-medium">NPM</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
          <input
            type="text"
            value={formData.npm}
            onChange={(e) => setFormData({ ...formData, npm: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            required
            placeholder="Masukkan NPM"
          />
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-2 font-medium">Nama</label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
          <input
            type="text"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            required
            placeholder="Masukkan nama lengkap"
          />
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-2 font-medium">Alamat</label>
        <div className="relative">
          <Home className="absolute left-3 top-3 text-emerald-600 h-5 w-5" />
          <textarea
            value={formData.alamat}
            onChange={(e) =>
              setFormData({ ...formData, alamat: e.target.value })
            }
            className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            rows={3}
            required
            placeholder="Masukkan alamat lengkap"
          />
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-3 font-medium">
          Jenis Kelamin
        </label>
        <div className="space-x-6 bg-white/50 p-4 rounded-xl border border-emerald-200">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="jenisKelamin"
              value="Laki-laki"
              onChange={(e) =>
                setFormData({ ...formData, jenisKelamin: e.target.value })
              }
              className="form-radio h-5 w-5 text-emerald-600"
              required
            />
            <span className="ml-2 text-gray-700">Laki-laki</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="jenisKelamin"
              value="Perempuan"
              onChange={(e) =>
                setFormData({ ...formData, jenisKelamin: e.target.value })
              }
              className="form-radio h-5 w-5 text-emerald-600"
            />
            <span className="ml-2 text-gray-700">Perempuan</span>
          </label>
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-2 font-medium">Jurusan</label>
        <div className="relative">
          <img
            src="dist/assets/unsil.png"
            alt="Unsil Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
          />
          <select
            value={formData.jurusan}
            onChange={(e) =>
              setFormData({ ...formData, jurusan: e.target.value })
            }
            className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            required
          >
            <option value="">Pilih Jurusan</option>
            <option value="Informatika">Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Teknik Elektro">Teknik Elektro</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
          </select>
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label className="block text-gray-700 mb-2 font-medium">Angkatan</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
          <select
            value={formData.angkatan}
            onChange={(e) =>
              setFormData({ ...formData, angkatan: e.target.value })
            }
            className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            required
          >
            <option value="">Pilih Angkatan</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>

      <div className="gradient-border mt-8">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:translate-y-[-2px]"
        >
          Simpan Data
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
