import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import { VscLayoutSidebarLeftDock } from "react-icons/vsc";
import logo from "@/assets/images/logo.png"
import Link from "next/link";

export function SideBar() {
    const navItems = [
        { icon: House, label: "Home", href:"/dashboard/recruiter" },
        { icon: Magnifier, label: "Search", href:"/dashboard/recruiter"},
        { icon: Bell, label: "Notifications", href:"/dashboard/recruiter/notification" },
        { icon: Envelope, label: "Messages", href:"/dashboard/recruiter/sms" },
        { icon: Person, label: "Profile", href:"/dashboard/recruiter/profile" },
        { icon: Gear, label: "Settings" ,href:"/dashboard/recruiter/settings" },
    ];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
                <button
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            </Link>
        ))}
    </nav>

    return (

        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                <div className="mb-10 px-3">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100}></Image>
                    </Link>
                </div>
                {navContent}
            </aside>

            <Drawer>
                <Button className="lg:hidden rounded-none" variant="secondary">
                    <VscLayoutSidebarLeftDock />
                </Button>

                <div className="min-h-screen h-full lg:hidden w-1 text-default bg-default"></div>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
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