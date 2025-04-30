import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

interface Student {
  npm: string;
  nama: string;
  alamat: string;
  jenisKelamin: string;
  jurusan: string;
  angkatan: string;
}

interface StudentDataProps {
  students: Student[];
}

const StudentData: React.FC<StudentDataProps> = ({ students }) => {
  if (students.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-block p-3 rounded-full bg-emerald-100 mb-4">
          <FileSpreadsheet className="h-8 w-8 text-emerald-600" />
        </div>
        <p className="text-lg text-emerald-800">Belum ada data mahasiswa yang tersimpan.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-100 mb-4">
          <FileSpreadsheet className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text">
          Data Mahasiswa
        </h2>
      </div>
      <div className="overflow-x-auto rounded-xl shadow-xl border border-emerald-100">
        <table className="min-w-full bg-white/80 backdrop-blur-sm">
          <thead>
            <tr className="bg-gradient-to-r from-emerald-600 to-emerald-700">
              <th className="py-4 px-6 text-left font-semibold text-white border-b">NPM</th>
              <th className="py-4 px-6 text-left font-semibold text-white border-b">Nama</th>
              <th className="py-4 px-6 text-left font-semibold text-white border-b">Alamat</th>
              <th className="py-4 px-6 text-left font-semibold text-white border-b">Jenis Kelamin</th>
              <th className="py-4 px-6 text-left font-semibold text-white border-b">Jurusan</th>
              <th className="py-4 px-6 text-left font-semibold text-white border-b">Angkatan</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-emerald-50/50 transition-colors duration-150">
                <td className="py-4 px-6 border-b border-emerald-100">{student.npm}</td>
                <td className="py-4 px-6 border-b border-emerald-100">{student.nama}</td>
                <td className="py-4 px-6 border-b border-emerald-100">{student.alamat}</td>
                <td className="py-4 px-6 border-b border-emerald-100">{student.jenisKelamin}</td>
                <td className="py-4 px-6 border-b border-emerald-100">{student.jurusan}</td>
                <td className="py-4 px-6 border-b border-emerald-100">{student.angkatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;