"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
    Select,
    Label,
    Description,
    Header,
    ListBox,
    Separator,
    SearchField,
    FieldError
} from "@heroui/react";

export default function JobSearchFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Initialize state from URL to persist filters on refresh
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [category, setCategory] = useState(new Set([searchParams.get("category") || "all"]));
    const [jobType, setJobType] = useState(new Set([searchParams.get("jobType") || "all"]));
    const [workModel, setWorkModel] = useState(new Set([searchParams.get("workModel") || "all"]));

    // Utility to update URL parameters
    const updateUrlParams = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value && value !== "all") {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        // Push the new URL without triggering a full page reload
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // Handle Input Search (triggers when user presses Enter or clicks clear)
    const handleSearchSubmit = (value) => {
        updateUrlParams("search", value);
    };

    const handleSearchClear = () => {
        setSearchTerm("");
        updateUrlParams("search", "");
    };

    // Handle Select Dropdowns
    // Handle Select Dropdowns
    const handleSelectionChange = (key, selection, setter) => {
        // 1. Safely extract the value whether HeroUI passes a string or a Set
        const value = typeof selection === "string" ? selection : Array.from(selection)[0];

        // 2. Update the UI state (HeroUI Select expects a Set for the selectedKeys prop)
        setter(new Set([value]));

        // 3. Push the correct full word to the URL
        updateUrlParams(key, value);
    };

    return (
        <div className="w-full bg-[#0a0a0a] p-4 border border-[#202020] rounded-2xl flex flex-col md:flex-row gap-4 items-center shadow-lg">

            {/* Search Input */}
            <div className="w-full md:flex-1">
                <SearchField
                    className="w-full"
                    value={searchTerm}
                    onChange={setSearchTerm}
                    onSubmit={handleSearchSubmit}
                >
                    <Label className="sr-only">Search Jobs</Label>
                    <SearchField.Group className="flex items-center bg-[#121212] border border-[#2e2e2e] focus-within:border-[#e5b3e5] rounded-xl px-4 py-2.5 transition-colors">
                        <SearchField.SearchIcon className="text-neutral-400 w-5 h-5 mr-3" />
                        <SearchField.Input
                            placeholder="Search by job title or company..."
                            className="bg-transparent text-white text-[15px] outline-none w-full placeholder:text-neutral-500"
                        />
                        <SearchField.ClearButton
                            onPress={handleSearchClear}
                            className="text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none flex items-center justify-center p-1 rounded-md focus-visible:ring-2 focus-visible:ring-[#e5b3e5]"
                        >
                            ✕
                        </SearchField.ClearButton>
                    </SearchField.Group>
                    <Description className="hidden" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </SearchField>
            </div>

            {/* Filters Container */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">

                {/* Category Filter */}
                <Select
                    className="w-full sm:w-40"
                    selectedKeys={category}
                    onSelectionChange={(keys) => handleSelectionChange("category", keys, setCategory)}
                >
                    <Label className="sr-only">Category</Label>
                    <Select.Trigger className="flex items-center justify-between w-full bg-[#121212] border border-[#2e2e2e] hover:bg-[#1a1a1a] rounded-xl px-4 py-2.5 text-white text-[14px] cursor-pointer outline-none focus-visible:border-[#e5b3e5] transition-colors">
                        <Select.Value placeholder="Category" />
                        <Select.Indicator className="text-neutral-400 w-4 h-4 ml-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </Select.Indicator>
                    </Select.Trigger>
                    <Description className="hidden" />
                    <Select.Popover className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl mt-2 p-1 shadow-xl min-w-40">
                        <ListBox className="outline-none" selectionMode="single">
                            <ListBox.Item id="all" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">All Categories</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                            <Separator className="h-px bg-[#2e2e2e] my-1" />
                            <ListBox.Item id="design" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Design</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                            <ListBox.Item id="webdev" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Web Dev</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                            <ListBox.Item id="software" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Software</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Job Type Filter */}
                <Select
                    className="w-full sm:w-37.5"
                    selectedKeys={jobType}
                    onSelectionChange={(keys) => handleSelectionChange("jobType", keys, setJobType)}
                >
                    <Label className="sr-only">Job Type</Label>
                    <Select.Trigger className="flex items-center justify-between w-full bg-[#121212] border border-[#2e2e2e] hover:bg-[#1a1a1a] rounded-xl px-4 py-2.5 text-white text-[14px] cursor-pointer outline-none focus-visible:border-[#e5b3e5] transition-colors">
                        <Select.Value placeholder="Job Type" />
                        <Select.Indicator className="text-neutral-400 w-4 h-4 ml-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </Select.Indicator>
                    </Select.Trigger>
                    <Description className="hidden" />
                    <Select.Popover className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl mt-2 p-1 shadow-xl min-w-37.5">
                        <ListBox className="outline-none" selectionMode="single">
                            <ListBox.Item id="all" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Any Type</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                            <ListBox.Item id="full-time" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Full-time</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                            <ListBox.Item id="contract" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                <Label className="cursor-pointer">Contract</Label>
                                <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Work Model Filter */}
                <Select
                    className="w-full sm:w-37.5"
                    selectedKeys={workModel}
                    onSelectionChange={(keys) => handleSelectionChange("workModel", keys, setWorkModel)}
                >
                    <Label className="sr-only">Location</Label>
                    <Select.Trigger className="flex items-center justify-between w-full bg-[#121212] border border-[#2e2e2e] hover:bg-[#1a1a1a] rounded-xl px-4 py-2.5 text-white text-[14px] cursor-pointer outline-none focus-visible:border-[#e5b3e5] transition-colors">
                        <Select.Value placeholder="Location" />
                        <Select.Indicator className="text-neutral-400 w-4 h-4 ml-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </Select.Indicator>
                    </Select.Trigger>
                    <Description className="hidden" />
                    <Select.Popover className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl mt-2 p-1 shadow-xl min-w-37.5">
                        <ListBox className="outline-none" selectionMode="single">
                            <ListBox.Section>
                                <Header className="px-3 py-1 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Work Model</Header>
                                <ListBox.Item id="all" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                    <Label className="cursor-pointer">Anywhere</Label>
                                    <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                                </ListBox.Item>
                                <ListBox.Item id="remote" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                    <Label className="cursor-pointer">Remote</Label>
                                    <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                                </ListBox.Item>
                                <ListBox.Item id="onsite" className="px-3 py-2 flex items-center justify-between text-white text-[14px] hover:bg-[#2e2e2e] rounded-lg cursor-pointer outline-none select-none data-selected:text-[#e5b3e5]">
                                    <Label className="cursor-pointer">On-site</Label>
                                    <ListBox.ItemIndicator className="w-4 h-4">✓</ListBox.ItemIndicator>
                                </ListBox.Item>
                            </ListBox.Section>
                        </ListBox>
                    </Select.Popover>
                </Select>

            </div>
        </div>
    );
}