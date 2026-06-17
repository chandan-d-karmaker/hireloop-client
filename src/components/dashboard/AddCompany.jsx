"use client";

import React, { useState } from "react";
import {
    Button,
    Input,
    Label,
    Modal,
    TextField,
    TextArea,
    Form,
    Select,
    ListBox
} from "@heroui/react";
import {
    LocationArrow,
    ChevronDown,
    ArrowUpFromLine // Or any suitable upload icon from Gravity UI
} from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";

export default function AddCompany() {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, isPending } = useSession();
    const user = session?.user;

    // Mock data for dropdowns
    const industries = [
        { id: "technology", label: "Technology" },
        { id: "finance", label: "Finance & Banking" },
        { id: "healthcare", label: "Healthcare" },
        { id: "retail", label: "Retail & E-commerce" },
    ];

    const employeeRanges = [
        { id: "1-10", label: "1-10 employees" },
        { id: "11-50", label: "11-50 employees" },
        { id: "51-200", label: "51-200 employees" },
        { id: "201-500", label: "201-500 employees" },
        { id: "500+", label: "500+ employees" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const companyData = {
            ...data,
            addedBy: user._id,
            addedAt: new Date(),
        }

        console.log("Submitting Company Registration:", data);

        setTimeout(() => {
            setIsLoading(false);
            alert("Company registered successfully!");
        }, 1500);
    };

    // Shared generic input styles for primitive Input/TextArea to match your "Post a Job" design
    const baseInputClass = "bg-[#222222] border-none hover:bg-[#2A2A2A] focus-visible:bg-[#2A2A2A] rounded-xl px-4 py-2 text-white shadow-none focus-visible:ring-0 placeholder:text-neutral-500 w-full";
    const labelClass = "text-neutral-300 font-medium pb-1.5 text-sm";

    return (
        <Modal>
            {/* The trigger button to open the modal */}
            <Button variant="solid" className="bg-white text-black font-semibold">
                Register Company
            </Button>

            <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-3xl bg-[#141414] border border-neutral-800 rounded-2xl p-0 overflow-hidden">

                        <Modal.CloseTrigger className="text-neutral-400 hover:text-white top-6 right-6" />

                        {/* --- MODAL HEADER --- */}
                        <Modal.Header className="px-8 pt-8 pb-6 border-b border-neutral-800 flex flex-col gap-1">
                            <Modal.Heading className="text-2xl font-semibold text-white">
                                Register New Company
                            </Modal.Heading>
                            <p className="text-sm text-neutral-400 font-normal">
                                Enter your business details to start hiring on HireLoop.
                            </p>
                        </Modal.Header>

                        {/* --- MODAL BODY (Form) --- */}
                        <Modal.Body className="p-0">
                            <Form onSubmit={handleSubmit} className="flex flex-col w-full">
                                <div className="p-8 flex flex-col gap-8 w-full">

                                    {/* Row 1: Company Name & Industry */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                        <TextField isRequired name="companyName" className="w-full">
                                            <Label className={labelClass}>Company Name</Label>
                                            <Input placeholder="e.g. Acme Corp" className={baseInputClass} />
                                        </TextField>

                                        <div className="flex flex-col w-full">
                                            <Label className={labelClass}>Industry / Category</Label>
                                            <Select name="industry" placeholder="Technology" isRequired>
                                                <Select.Trigger className={`${baseInputClass} min-h-10 flex items-center justify-between`}>
                                                    <Select.Value />
                                                    <Select.Indicator>
                                                        <ChevronDown className="w-4 h-4 text-neutral-500" />
                                                    </Select.Indicator>
                                                </Select.Trigger>
                                                <Select.Popover className="bg-[#2A2A2A] border border-neutral-700">
                                                    <ListBox items={industries}>
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

                                    {/* Row 2: Website & Location */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                        <TextField isRequired name="website" className="w-full">
                                            <Label className={labelClass}>Website URL</Label>
                                            {/* Custom compound input for the https:// prefix */}
                                            <div className="flex items-stretch w-full rounded-xl overflow-hidden bg-[#222222] focus-within:bg-[#2A2A2A] transition-colors">
                                                <div className="flex items-center px-4 bg-[#2A2A2A] text-neutral-400 text-sm border-r border-neutral-800">
                                                    https://
                                                </div>
                                                <Input
                                                    placeholder="www.company.com"
                                                    className="bg-transparent border-none flex-1 px-4 py-2 text-white shadow-none focus-visible:ring-0 placeholder:text-neutral-500"
                                                />
                                            </div>
                                        </TextField>

                                        <TextField isRequired name="location" className="w-full">
                                            <Label className={labelClass}>Location</Label>
                                            <div className="relative w-full">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                                    <LocationArrow className="w-4 h-4" />
                                                </div>
                                                <Input type="text" placeholder="City, Country" className={`${baseInputClass} pl-9`} />
                                            </div>
                                        </TextField>
                                    </div>

                                    {/* Row 3: Employee Count & Logo Upload */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-end">
                                        <div className="flex flex-col w-full">
                                            <Label className={labelClass}>Employee Count Range</Label>
                                            <Select name="employeeCount" placeholder="1-10 employees" isRequired>
                                                <Select.Trigger className={`${baseInputClass} min-h-10 flex items-center justify-between`}>
                                                    <Select.Value />
                                                    <Select.Indicator>
                                                        <ChevronDown className="w-4 h-4 text-neutral-500" />
                                                    </Select.Indicator>
                                                </Select.Trigger>
                                                <Select.Popover className="bg-[#2A2A2A] border border-neutral-700">
                                                    <ListBox items={employeeRanges}>
                                                        {(item) => (
                                                            <ListBox.Item key={item.id} id={item.id} textValue={item.label} className="text-white hover:bg-[#3A3A3A]">
                                                                {item.label}
                                                            </ListBox.Item>
                                                        )}
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5">
                                            <Label className={labelClass}>Company Logo</Label>
                                            <div className="flex items-center gap-4">
                                                <button
                                                    type="button"
                                                    className="w-14 h-14 bg-[#222222] border border-dashed border-neutral-600 rounded-xl flex items-center justify-center hover:bg-[#2A2A2A] transition-colors cursor-pointer"
                                                >
                                                    <ArrowUpFromLine className="w-5 h-5 text-neutral-400" />
                                                </button>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-white">Upload image</span>
                                                    <span className="text-xs text-neutral-500">PNG, JPG up to 5MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 4: Brief Description */}
                                    <TextField isRequired name="description" className="w-full">
                                        <Label className={labelClass}>Brief Description</Label>
                                        <TextArea
                                            rows={4}
                                            placeholder="Tell us about your company's mission and culture..."
                                            className={baseInputClass}
                                        />
                                    </TextField>
                                </div>

                                {/* --- MODAL FOOTER --- */}
                                <Modal.Footer className="px-8 py-6 border-t border-neutral-800 flex justify-end gap-3 bg-[#181818]">
                                    <Button
                                        slot="close" // HeroUI v3 specific prop to auto-close modal
                                        variant="flat"
                                        className="bg-transparent text-white hover:bg-neutral-800 font-medium px-6"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        isLoading={isLoading}
                                        className="bg-white text-black font-semibold shadow-sm hover:bg-neutral-200 px-6"
                                    >
                                        Register Company
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}