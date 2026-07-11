import { BookOpen, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const educationItems = [
  {
    title: "B.E in Computer Science",
    institution: "Srinivas Institute of Technology",
    period: "2022 - 2026",
    description:
      "Focused on software engineering, web technologies, and problem-solving with a strong interest in modern product development.",
  },
  {
    title: "Higher Secondary Education",
    institution: "Government PU college ",
    period: "2020 - 2022",
    description:
      "Built a strong foundation in mathematics, science, and analytical thinking while exploring technology and innovation.",
  },
  {
    title: "SSLC Education",
    institution: "Bnaglore Public School ",
    period: "2019 - 2020",
    description:
      "Completed 10th Standard with excellent academic performance, gaining fundamental knowledge in mathematics, science, and analytical reasoning.",
  },
];

const experienceItems = [
  {
    title: "Android development interns Intern",
    company: "Mindmatrix ",
    period: "Jun 2026 - May 2026",
    description:
      "Completed an Android Development Internship at MindMatrix Technologies, where I developed mobile applications using Kotlin, XML, and Android Studio.  Developed and tested real-world projects, including Grama-Vaxi, an offline livestock vaccination management application with reminder notifications.",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
            <GraduationCap size={14} />
            Education
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl lg:text-5xl">
              Learning with purpose and building with curiosity.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              My education has shaped how I approach engineering, design, and product thinking. I continue to blend academic learning with hands-on building in software and AI.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {educationItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/15 bg-black/40 p-2">
                    <BookOpen size={18} className="text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.institution}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  {item.period}
                </span>
              </div>
              <p className="leading-8 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3 text-white/80">
              <div className="rounded-full border border-white/15 bg-black/40 p-2">
                <Briefcase size={18} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
                <p className="text-sm text-white/60">Practical engineering roles and campus leadership.</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {experienceItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {item.period}
                    </span>
                  </div>
                  <p className="leading-8 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
          <div className="flex items-center gap-3 text-white/80">
            <Sparkles size={18} />
            <span className="text-sm uppercase tracking-[0.3em]">Continuous growth</span>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            I value practical learning, self-driven experimentation, and building technology that feels helpful, polished, and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
