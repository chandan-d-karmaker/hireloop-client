import { Briefcase, Envelope, Gear, VectorSquare, Factory, Person } from "@gravity-ui/icons";
import { FaWpforms } from "react-icons/fa6";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import { VscLayoutSidebarLeftDock } from "react-icons/vsc";
import logo from "@/assets/images/logo.png"
import Link from "next/link";
import NavLink from "../shared/NavLink";

export function SideBar() {
    const navItems = [
        { icon: VectorSquare, label: "Dashboard", href: "/dashboard/recruiter" },
        { icon: Factory, label: "My Company", href: "/dashboard/recruiter/company" },
        { icon: Briefcase, label: "Manage Jobs", href: "/dashboard/recruiter/jobs" },
        { icon: FaWpforms, label: "Application", href: "/dashboard/recruiter/application" },
        { icon: Gear, label: "Settings", href: "/dashboard/recruiter/settings" },
    ];

    const navContent = <nav className="flex flex-col gap-1 w-full">
        {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
                <button
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-foreground w-full transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            </NavLink>
        ))}
    </nav>

    return (

        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                <div className="px-3">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100}></Image>
                    </Link>
                </div>
                <div className="mt-20">
                    {navContent}
                </div>
            </aside>

            <Drawer>
                <Button className="lg:hidden rounded-none" variant="secondary">
                    <VscLayoutSidebarLeftDock />
                </Button>

                <div className="min-h-screen h-full lg:hidden w-1 text-default bg-default"></div>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left" >
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Hireloop</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}