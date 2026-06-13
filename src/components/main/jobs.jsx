import { FiArrowRight } from "react-icons/fi";
import JobCard from "../shared/JobCard";

function JobsSection() {
  const jobs = Array(6).fill({
    title: "Frontend Developer",
    desc: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€35 - €40/hour",
  });
 
  return (
    <section className="bg-[#0a0a0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
          <span className="text-[10px] tracking-widest text-[#6c5ce7] uppercase font-medium">Smart Job Discovery</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-12">
          The roles you&apos;d never
          <br />find by searching
        </h2>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
 
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2.5 text-sm text-white border border-white/15 rounded-full hover:border-white/30 hover:bg-white/5 transition-colors flex items-center gap-2">
            View all jobs open <FiArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobsSection;