"use client"
import { motion } from "framer-motion"
import { HeartPulse, Award, Microscope } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import SectionHeader from "@/components/ui/section-header"
import { fadeInUp, staggerChildren } from "@/lib/motion-variants"

const VALUES = [
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    body: "We put patients at the centre of everything we do, ensuring our medicines improve and transform lives.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-l-rose-400",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "We strive for excellence in quality, safety, efficacy, reliability and innovation across every product.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-l-amber-400",
  },
  {
    icon: Microscope,
    title: "Innovation",
    body: "We continuously innovate to develop better treatments and improve healthcare outcomes for all.",
    color: "text-[#0B5ED7]",
    bg: "bg-blue-50",
    border: "border-l-blue-500",
  },
]

export default function ValuesSection() {
  return (
    <AnimatedSection className="py-20 md:py-24 bg-[#f7fafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Core Values"
          title="What Drives Us"
          body="At CureZip Pharma, our values guide everything — from research and development to manufacturing and distribution."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {VALUES.map(({ icon: Icon, title, body, color, bg, border }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className={`group bg-white rounded-2xl border-l-4 ${border} p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${bg} mb-5`}>
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
