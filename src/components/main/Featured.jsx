import { FiBarChart2, FiBookmark, FiFileText, FiSearch, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function FeaturesSection() {
  const features = [
    { icon: <FiSearch size={20} />, title: "Smart Search", desc: "Find your ideal job with advanced filters." },
    { icon: <FiBarChart2 size={20} />, title: "Salary Insights", desc: "Get real salary data to negotiate confidently." },
    { icon: <HiOutlineBuildingOffice2 size={20} />, title: "Top Companies", desc: "Apply to vetted companies that are hiring." },
    { icon: <FiBookmark size={20} />, title: "Saved Jobs", desc: "Manage apps & favorites on your dashboard." },
    { icon: <FiZap size={20} />, title: "One-Click Apply", desc: "Simplify your job applications for an easier process." },
    { icon: <FiFileText size={20} />, title: "Resume Builder", desc: "Create professional resumes with modern templates." },
    { icon: <FiUsers size={20} />, title: "Skill-Based Matching", desc: "Discover jobs that match your skills and experience." },
    { icon: <FiTrendingUp size={20} />, title: "Career Growth Resources", desc: "Boost your career with quick interview tips." },
  ];
 
  return (
    <section className="bg-[#0d0d14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
          <span className="text-[10px] tracking-widest text-[#6c5ce7] uppercase font-medium">Features Job</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-16">
          Everything you need
          <br />to succeed
        </h2>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a2e] border border-white/8 flex items-center justify-center text-[#6c5ce7]">
                {f.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{f.title}</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;