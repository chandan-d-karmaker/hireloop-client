import React from 'react';
import { Card, Chip, Button } from "@heroui/react";
import { 
    Factory, 
    LocationArrow, 
    ArrowRight, 
    CircleCheckFill // For the verified badge
} from "@gravity-ui/icons";
import Image from 'next/image';

export default function CompanyCard({ company }) {
    // Destructure the expected fields from your JSON object
    const {
        companyName,
        industry,
        location,
        description,
        logoUrl,
        // _id, website, employeeCount, addedBy, createdAt could be used for links or other details
    } = company || {};

    // In a real app, you might calculate this by fetching related jobs.
    // For this UI, we'll hardcode a generic number or pass it as a prop.
    const activeJobsCount = 12; 
    
    // Simulate a verified status based on your screenshot
    const isVerified = true; 

    return (
        <Card 
            className="w-full max-w-95 bg-[#1A1A1A] border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between shadow-none hover:border-neutral-700 transition-colors"
        >
            <div className="flex flex-col gap-5">
                {/* Header: Logo and Badge */}
                <div className="flex items-start justify-between">
                    {/* Logo Container */}
                    <div className="w-14 h-14 bg-[#262626] rounded-xl overflow-hidden border border-neutral-800 flex items-center justify-center">
                        {logoUrl ? (
                            <Image
                                src={logoUrl} 
                                width={100}
                                height={100}
                                alt={`${companyName} logo`} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                        ) : null}
                        
                        {/* Fallback Icon if no logo URL or image fails */}
                        <Factory 
                            className="w-6 h-6 text-neutral-500" 
                            style={{ display: logoUrl ? 'none' : 'block' }} 
                        />
                    </div>

                    {/* Verified Badge */}
                    {isVerified && (
                        <Chip
                            size="sm"
                            variant="flat"
                            color="success"
                            className="bg-[#052e16] text-[#22c55e] border border-[#14532d] px-2 py-0.5 gap-1"
                            startcontent={<CircleCheckFill className="w-3 h-3" />}
                        >
                            VERIFIED
                        </Chip>
                    )}
                </div>

                {/* Body: Title and Description */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {companyName}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    <Chip
                        variant="bordered"
                        size="sm"
                        className="border-neutral-700 text-neutral-300 px-3 py-4 text-xs"
                        startcontent={<Factory className="w-3.5 h-3.5 mr-1 text-neutral-500" />}
                    >
                        {industry}
                    </Chip>
                    <Chip
                        variant="bordered"
                        size="sm"
                        className="border-neutral-700 text-neutral-300 px-3 py-4 text-xs"
                        startcontent={<LocationArrow className="w-3.5 h-3.5 mr-1 text-neutral-500" />}
                    >
                        {location}
                    </Chip>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-2 pt-4 border-t border-neutral-800 flex items-center justify-between w-full">
                <span className="text-sm font-medium text-white">
                    {activeJobsCount} Active Jobs
                </span>
                
                <Button 
                    variant="light"
                    className="text-white font-medium p-0 h-auto hover:bg-transparent hover:opacity-70 transition-opacity"
                    endContent={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                    View Openings
                </Button>
            </div>
        </Card>
    );
}