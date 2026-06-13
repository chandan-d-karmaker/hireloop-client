import { FiArrowRight, FiBriefcase, FiGlobe, FiMapPin } from "react-icons/fi";

function JobCard({ title, desc, location, type, salary }) {
  return (
    <div className="bg-[#111118] border border-white/8 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#6c5ce7]/50 transition-colors group ">
      {/* Company icon placeholder */}
      <div className="w-9 h-9 rounded-lg bg-[#1e1e2e] flex items-center justify-center">
        <FiBriefcase className="text-[#6c5ce7]" size={16} />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">{desc}</p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <FiMapPin size={10} /> {location}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <FiGlobe size={10} /> {type}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-gray-400">💰 {salary}</span>
      </div>
      <button className="mt-auto text-xs text-[#6c5ce7] group-hover:text-[#a78bfa] cursor-pointer flex items-center gap-1 transition-colors">
        Apply Now <FiArrowRight size={11} />
      </button>
    </div>
  );
}

export default JobCard;