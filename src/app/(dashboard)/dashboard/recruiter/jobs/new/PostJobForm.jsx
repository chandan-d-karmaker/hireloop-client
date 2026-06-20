"use client";

import React, { useState } from "react";
import {
    Form,
    Input,
    TextArea,
    TextField, // Added TextField wrapper for V3
    Select,
    ListBox,
    Label,
    Switch,
    Button,
    Spinner,
    Chip
} from "@heroui/react";
import {
    LocationArrow,
    Briefcase,
    Calendar,
    Factory,
    ChevronDown
} from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function PostJobForm({ company }) {
    const [isRemote, setIsRemote] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    console.log("Company data in job post:", company);

    // const { _id, companyName, location, logoUrl } = company;

    // console.log("Recruiter company info:", {_id, companyName, location, logoUrl});

    // Mock configuration for recruiter's authenticated state
    // const [mockCompany] = useState({
    //     name: "Acme Corp (Auto-filled)",
    //     id: "company_123",
    //     isApproved: true,
    // });

    // Mock data for dropdowns
    const jobTypes = [
        { id: "full-time", label: "Full-time" },
        { id: "part-time", label: "Part-time" },
        { id: "contract", label: "Contract" },
        { id: "internship", label: "Internship" },
    ];

    const categories = [
        { id: "engineering", label: "Engineering & Tech" },
        { id: "webdev", label: "Frontend Web Developer" },
        { id: "design", label: "Design & UX" },
        { id: "marketing", label: "Marketing" },
        { id: "sales", label: "Sales" },
    ];

    const currencies = [
        { id: "USD", label: "USD ($)" },
        { id: "EUR", label: "EUR (€)" },
        { id: "GBP", label: "GBP (£)" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // if (!mockCompany.isApproved) {
        //     alert("Your company profile must be approved before you can post jobs.");
        //     return;
        // }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        data.isRemote = isRemote;
        const jobData = {
            ...data,
            companyId: company?._id,
            companyName: company?.companyName,
            companyLogo: company?.logoUrl,
            status: "active",
            isPubliclyVisible: true,
            createdAt: new Date(),
        }
        console.log("Submitting Job Post:", jobData);

        const res = await createJob(jobData);
        if (res.insertedId) {
            toast.success("Job posted successfully! It is now publicly visible.");
            e.target.reset();
            setIsLoading(false);
            redirect("/dashboard/recruiter/jobs");
        } else {
            toast.error("Something went wrong!");
            setIsLoading(false);
        }

        // setTimeout(() => {
        //     setIsLoading(false);
        //     // alert("Job posted successfully! It is now publicly visible.");
        // }, 1500);
    };

    // Shared generic input styles for primitive Input/TextArea
    const baseInputClass = "bg-[#222222] border-none hover:bg-[#2A2A2A] focus-visible:bg-[#2A2A2A] rounded-xl px-4 py-2 text-white shadow-none focus-visible:ring-1 placeholder:text-neutral-500 w-full";

    // Shared label style
    const labelClass = "text-neutral-300 font-medium pb-1.5 text-sm";

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#141414] border border-neutral-800 rounded-2xl">
            {/* Header */}
            <div className="mb-8 border-b border-default bg-[#1B1B1C] rounded-t-2xl p-6 sm:p-8">
                <h1 className="text-2xl font-semibold text-white mb-1">Post a New Job</h1>
                <p className="text-sm text-neutral-400">
                    Create a public job listing. It will be automatically linked to your approved company profile.
                </p>
            </div>

            {company.status !== 'Approved' && <div className="text-center my-4">Please wait to get approval</div>}

            {company.status === 'Approved' &&  <Form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

                <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                    {/* --- SECTION 1: JOB INFO --- */}
                    <fieldset className="flex flex-col gap-6 w-full">
                        <legend className="text-lg font-medium text-white mb-4">Job Information</legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* UPDATED: Job Title using TextField */}
                            <TextField isRequired name="title" className="w-full">
                                <Label className={labelClass}>Job Title *</Label>
                                <Input placeholder="e.g. Senior Frontend Developer" className={baseInputClass} />
                            </TextField>

                            {/* Job Category */}
                            <div className="flex flex-col w-full">
                                <Label className={labelClass}>Job Category *</Label>
                                <Select name="category" placeholder="Select category" isRequired>
                                    <Select.Trigger className={`${baseInputClass} min-h-10 flex items-center justify-between`}>
                                        <Select.Value />
                                        <Select.Indicator>
                                            <ChevronDown className="w-4 h-4 text-neutral-500" />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#2A2A2A] border border-neutral-700">
                                        <ListBox items={categories}>
                                            {(item) => (
                                                <ListBox.Item key={item.id} id={item.id} textValue={item.label} className="text-white hover:bg-[#3A3A3A]">
                                                    {item.label}
                                                </ListBox.Item>
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Job Type */}
                            <div className="flex flex-col w-full">
                                <Label className={labelClass}>Job Type *</Label>
                                <Select name="jobType" placeholder="Select job type" isRequired>
                                    <Select.Trigger className={`${baseInputClass} min-h-10 flex items-center justify-between`}>
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-neutral-500" />
                                            <Select.Value />
                                        </div>
                                        <Select.Indicator>
                                            <ChevronDown className="w-4 h-4 text-neutral-500" />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#2A2A2A] border border-neutral-700">
                                        <ListBox items={jobTypes}>
                                            {(item) => (
                                                <ListBox.Item key={item.id} id={item.id} textValue={item.label} className="text-white hover:bg-[#3A3A3A]">
                                                    {item.label}
                                                </ListBox.Item>
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* UPDATED: Application Deadline using TextField */}
                            <TextField isRequired name="deadline" className="w-full">
                                <Label className={labelClass}>Application Deadline *</Label>
                                <div className="relative w-full">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <Input type="date" placeholder=" " className={`${baseInputClass} pl-9`} />
                                </div>
                            </TextField>
                        </div>

                        {/* Salary Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <TextField name="salaryMin" className="w-full">
                                <Label className={labelClass}>Min Salary (Optional)</Label>
                                <Input type="number" placeholder="e.g. 80000" className={baseInputClass} />
                            </TextField>

                            <TextField name="salaryMax" className="w-full">
                                <Label className={labelClass}>Max Salary (Optional)</Label>
                                <Input type="number" placeholder="e.g. 120000" className={baseInputClass} />
                            </TextField>

                            {/* Currency */}
                            <div className="flex flex-col w-full">
                                <Label className={labelClass}>Currency</Label>
                                <Select name="currency" placeholder="Select">
                                    <Select.Trigger className={`${baseInputClass} min-h-10 flex items-center justify-between`}>
                                        <Select.Value />
                                        <Select.Indicator>
                                            <ChevronDown className="w-4 h-4 text-neutral-500" />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#2A2A2A] border border-neutral-700">
                                        <ListBox items={currencies}>
                                            {(item) => (
                                                <ListBox.Item key={item.id} id={item.id} textValue={item.label} className="text-white hover:bg-[#3A3A3A]">
                                                    {item.label}
                                                </ListBox.Item>
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        {/* Location / Remote Toggle */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                            <TextField isDisabled={isRemote} name="location" className="w-full">
                                <Label className={labelClass}>Location</Label>
                                <div className="relative w-full">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <LocationArrow className="w-4 h-4" />
                                    </div>
                                    <Input
                                        placeholder={isRemote ? "e.g. Anywhere (Remote)" : "City, Country"}
                                        disabled={isRemote}
                                        className={`${baseInputClass} pl-9 disabled:opacity-50 disabled:cursor-not-allowed`}
                                    />
                                </div>
                            </TextField>

                            <div className="flex items-center h-10 px-2">
                                {/* UPDATED: HeroUI V3 Composable Switch */}
                                <Switch
                                    isSelected={isRemote}
                                    onChange={() => setIsRemote(!isRemote)}
                                >
                                    <Switch.Content className="text-neutral-300 font-medium flex-row items-center gap-2">
                                        <Switch.Control>
                                            <Switch.Thumb />
                                        </Switch.Control>
                                        Fully Remote Position
                                    </Switch.Content>
                                </Switch>
                            </div>
                        </div>
                    </fieldset>

                    {/* --- SECTION 2: JOB DESCRIPTION --- */}
                    <fieldset className="flex flex-col gap-6 mt-4 w-full">
                        <legend className="text-lg font-medium text-white mb-4">Job Description</legend>

                        {/* UPDATED: TextAreas using TextField and `rows` instead of `minRows` */}
                        <TextField isRequired name="responsibilities" className="w-full">
                            <Label className={labelClass}>Responsibilities *</Label>
                            <TextArea
                                rows={4}
                                placeholder="What will this role entail day-to-day?"
                                className={baseInputClass}
                            />
                        </TextField>

                        <TextField isRequired name="requirements" className="w-full">
                            <Label className={labelClass}>Requirements *</Label>
                            <TextArea
                                rows={4}
                                placeholder="What skills, experience, and qualifications are needed?"
                                className={baseInputClass}
                            />
                        </TextField>

                        <TextField name="benefits" className="w-full">
                            <Label className={labelClass}>Benefits & Perks (Optional)</Label>
                            <TextArea
                                rows={3}
                                placeholder="What do you offer? (e.g. Health insurance, 401k, flexible hours)"
                                className={baseInputClass}
                            />
                        </TextField>
                    </fieldset>

                    {/* TODO: autofill company data */}
                    {/* --- SECTION 3: COMPANY (Auto-filled) --- */}
                    <fieldset className="flex flex-col gap-6 w-full mt-4">
                        <legend className="text-lg font-medium text-white my-2">Posting Company</legend>
                        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                                {company?.logoUrl ? (
                                    <Image src={company?.logoUrl} alt="Logo Preview" className="w-full h-full object-cover" width={100} height={100} />
                                ) : (
                                    <Factory className="text-neutral-400" />
                                )}
                            </div>
                            <div>
                                <p className="text-white font-medium">{company?.companyName}</p>
                                <p className="text-sm text-neutral-400">{company?.location}</p>
                                <Chip className="text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">{company.status}</Chip>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* --- FOOTER ACTIONS --- */}
                <div className="flex justify-end gap-3 border-t bg-[#1B1B1C] rounded-b-2xl border-default p-6 sm:p-8">
                    <Button
                        variant="flat"
                        className="bg-transparent text-white hover:bg-neutral-800 font-medium"
                        onPress={() => console.log("Cancel pressed")}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        className="bg-white text-black font-semibold shadow-sm hover:bg-neutral-200"
                    >
                        {isLoading ? <div className="flex flex-col items-center">
                            <Spinner color="success" />
                        </div> : "Post Job"}
                    </Button>
                </div>

            </Form>}
        </div>
    );
}