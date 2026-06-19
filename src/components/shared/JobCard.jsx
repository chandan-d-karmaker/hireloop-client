import { Card } from "@heroui/react";
import Image from "next/image";

export default function JobCard({job}) {

  const {companyLogo, companyName, title, responsibilities, isRemote, location, jobType, salaryMin, salaryMax } = job;
  return (
    
      <Card className="bg-[#121212] text-white border-none rounded-[24px] p-4 shadow-2xl">
        <Card.Header className="flex flex-col items-start gap-4 pb-2">
          {/* Company Info */}
          <div className="flex items-center gap-3">
            <Image
              src={companyLogo}
              alt="Adobe Logo"
              width={100}
              height={100}
              className="w-8 h-8 rounded-lg object-cover bg-white"
            />
            <span className="text-sm font-medium text-neutral-300">{companyName}</span>
          </div>
          
          {/* Title & Description */}
          <div className="flex flex-col gap-2">
            <Card.Title className="text-[26px] font-semibold tracking-tight m-0">
              {title}
            </Card.Title>
            <Card.Description className="text-[#a3a3a3] text-[15px] leading-relaxed line-clamp-2 m-0">
              {responsibilities}
            </Card.Description>
          </div>
        </Card.Header>
        
        <Card.Content className="py-6">
          {/* Pill-shaped Tags */}
          <div className="flex flex-wrap gap-2.5">
            <span className="flex items-center gap-2 bg-[#202020] px-4 py-2 rounded-full text-[14px] font-medium text-[#f5f5f5]">
              <svg className="w-4 h-4 text-[#e5b3e5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {isRemote? "Remote" : location}
            </span>
            <span className="flex items-center gap-2 bg-[#202020] px-4 py-2 rounded-full text-[14px] font-medium text-[#f5f5f5]">
              <svg className="w-4 h-4 text-[#e5b3e5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
              {jobType}
            </span>
            <span className="flex items-center gap-2 bg-[#202020] px-4 py-2 rounded-full text-[14px] font-medium text-[#f5f5f5]">
              <svg className="w-4 h-4 text-[#e5b3e5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39h-1.94c-.08-.9-.64-1.83-2.22-1.83-1.5 0-2.32.81-2.32 1.45 0 .8.5 1.41 2.83 1.96 2.62.62 4.02 1.76 4.02 3.86 0 2.05-1.47 3.01-3.22 3.3z"/>
              </svg>
              <span>{salaryMin} {"-"}</span>
              <span>{salaryMax}</span>
            </span>
          </div>
        </Card.Content>

        <Card.Footer className="pt-2 pb-4">
          <a href="#" className="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:opacity-80 transition-opacity">
            Apply Now 
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </Card.Footer>
      </Card>
  );
}