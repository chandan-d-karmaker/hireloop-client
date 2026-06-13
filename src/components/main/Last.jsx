import globle from "@/assets/images/cta-bg.png"
import Image from "next/image";

function CTASection() {
    return (
        <section className="relative  py-32 px-6 overflow-hidden">
            {/* Globe glow */}
            <Image
                src={globle}
                alt="Background"
                loading='eager'
                quality={70}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                    // position: 'center'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Your next role is
                    <br />already looking for you
                </h2>
                <p className="text-gray-400 text-sm mb-10">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
                        Create a free account
                    </button>
                    <button className="px-6 py-3 border border-white/15 text-white text-sm rounded-full hover:border-white/30 hover:bg-white/5 transition-colors">
                        View pricing
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTASection;