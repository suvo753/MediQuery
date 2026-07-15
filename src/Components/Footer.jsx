import { BookOpen, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-violet-600 p-2 rounded-xl">
              <BookOpen className="text-white" size={24} />
            </div>

            <h2 className="text-2xl font-bold text-white">
              MediQueue
            </h2>
          </div>

          <p className="leading-7 text-slate-400">
            Find experienced tutors, schedule online learning sessions,
            and improve your academic journey with our secure and easy
            booking platform.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 duration-300"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 duration-300"
            >
              <BsInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 duration-300"
            >
              <LiaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tutors">Tutors</Link></li>
            <li><Link href="/add-tutor">Add Tutor</Link></li>
            <li><Link href="/my-tutors">My Tutors</Link></li>
            <li><Link href="/my-booked-sessions">My Sessions</Link></li>
          </ul>
        </div>

        {/* Learning Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Learning Services
          </h3>

          <ul className="space-y-3">
            <li>✔ Mathematics Tutoring</li>
            <li>✔ Science Coaching</li>
            <li>✔ English Learning</li>
            <li>✔ Programming Courses</li>
            <li>✔ Online Live Sessions</li>
            <li>✔ Exam Preparation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <MapPin className="text-violet-500 mt-1" size={18} />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-violet-500 mt-1" size={18} />
              <p>+880 1712-345678</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-violet-500 mt-1" size={18} />
              <p>support@mediqueue.com</p>
            </div>

          </div>

          {/* Newsletter */}
          <div className="mt-7">

            <h4 className="font-semibold text-white mb-3">
              Subscribe Newsletter
            </h4>

            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 rounded-lg px-4 py-3 outline-none border border-slate-700 focus:border-violet-500"
              />

              <button className="bg-violet-600 hover:bg-violet-700 transition rounded-lg py-3 font-semibold text-white">
                Subscribe
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} MediQueue. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Support</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;