'use client';

// About component for Richards hub CV editing service

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            How Richard&apos;s CV Perfect was born from a passion to help
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Left side - Story */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-gray-700 leading-relaxed">
                  &quot;Sometimes it&apos;s not that you don&apos;t meet the requirements, it&apos;s how you present yourself on paper.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-4 italic">
                  - This realization changed everything
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Mbuyelo Nyathi, a passionate full-stack developer and CV consultant, noticed a critical gap in the job market. Talented individuals were losing opportunities not because they lacked skills, but because their CVs didn&apos;t showcase their true potential.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Witnessing people struggle with CV writing and editing, Mbuyelo saw an opportunity to make a real difference. With a vision to help job seekers at affordable prices, <strong>Richards hub</strong> was created.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The company is named in honor of Richard Nyathi, Mbuyelo&apos;s late father, whose legacy of helping others and striving for excellence continues to inspire this mission.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, Richards hub is dedicated to transforming CVs into powerful tools that open doors. We believe every qualified candidate deserves a chance, and we&apos;re here to make sure your CV gives you that chance.
              </p>
            </div>

            {/* Right side - Stats/Facts */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg mb-6">CVs Successfully Transformed</div>
                <hr className="border-blue-200 mb-6" />
                <p className="text-blue-100">
                  Helping job seekers across South Africa land better opportunities with professionally edited CVs
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-primary">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  To provide affordable, professional CV editing services that help talented individuals showcase their true potential and land the opportunities they deserve.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-primary">Our Values</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Affordability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Integrity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Accessibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center border-t-2 border-primary">
            <h3 className="text-2xl font-bold mb-2">Created by</h3>
            <p className="text-xl text-primary font-semibold mb-2">Mbuyelo Nyathi</p>
            <p className="text-gray-600">Full-Stack Developer & CV Consultant</p>
            <p className="text-gray-600 mt-2">Founder of Richards hub</p>
            <p className="text-sm text-gray-500 mt-4 italic">
              Dedicated to honoring Richard&apos;s legacy by helping others succeed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
