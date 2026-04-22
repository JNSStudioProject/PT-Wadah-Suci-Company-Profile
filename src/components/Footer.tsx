'use client';
import { Globe, MessageCircle, Share2, Link, Tv, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20">
      {/* Pre-footer CTA */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="bg-red-600 rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative z-10 md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Mari Membangun Bersama Kami</h3>
            <p className="text-red-100 text-lg">Hubungi tim kami untuk mendiskusikan kebutuhan material dan solusi konstruksi proyek Anda.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-sm shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all">
              Hubungi Sales
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-red-600 transition-all">
              Katalog Produk
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Wadah Suci</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              PT Wadah Suci Tbk adalah penyedia solusi bahan bangunan terkemuka di Asia Tenggara, melangkah maju dengan inovasi dan keberlanjutan.
            </p>
            <div className="flex space-x-4">
              {[Globe, MessageCircle, Share2, Link, Tv].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors text-slate-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Tentang Kami</h4>
            <ul className="space-y-3">
              {['Profil Perusahaan', 'Sejarah', 'Visi & Misi', 'Dewan Direksi & Komisaris', 'Penghargaan', 'Karir'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-red-400 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Bisnis & Layanan</h4>
            <ul className="space-y-3">
              {['Semen Portlan', 'Beton Siap Pakai', 'Beton Pracetak', 'Layanan Logistik', 'E-Commerce Semen', 'Solusi Konstruksi'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-red-400 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Kantor Pusat</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Menara Wadah Suci, Lt. 25<br/>Jl. Jend. Sudirman Kav. 12<br/>Jakarta Selatan 12920<br/>Indonesia</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <span>+62 21 555 1234</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <span>info@wadahsuci.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} PT Wadah Suci Tbk. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
