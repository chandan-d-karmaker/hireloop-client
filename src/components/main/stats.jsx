import { Briefcase, ChartColumn, Magnifier, Star } from "@gravity-ui/icons";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: Briefcase,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: ChartColumn,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: Magnifier,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: Star,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative w-full py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Heading text */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] text-[#A1A1AA] font-normal leading-relaxed">
            Assisting over <span className="text-white font-medium">15,000 job seekers</span> <br className="hidden sm:block" />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-[#0A0A0A] rounded-2xl p-6 flex flex-col justify-between h-44 sm:h-48 border border-white/5 shadow-lg"
              >
                {/* Top Left Icon */}
                <div className="text-gray-400">
                  <Icon width={18} height={18} />
                </div>

                {/* Bottom Stats */}
                <div className="mt-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}