import ctaInfrastructure from "@/assets/cta-infrastructure.png";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal } from "@/components/ui-system/RevealOnScroll";

export default function SiteCtaPanel() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="w-full px-5 lg:px-10">
        <Reveal>
          <div className="relative min-h-[460px] w-full overflow-hidden rounded-[24px] p-8 text-white lg:p-20">
            <img src={ctaInfrastructure} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(206_70%_35%_/_0.82)] via-[hsl(206_70%_50%_/_0.42)] to-transparent" />
            <div className="relative max-w-[1220px]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">Trusted by 400+ customers</p>
              <h2 className="mt-6 font-display text-display-xl font-medium text-white">
                Build your business on<br className="hidden lg:block" /> infrastructure designed for Ghana's<br className="hidden lg:block" /> critical digital economy.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/84">
                Speak with Smart Infraco about fibre, cloud and data centre services that match your scale, risk and geography.
              </p>
              <div className="mt-9">
                <MagneticButton to="/contact" variant="primary">Get Started</MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
