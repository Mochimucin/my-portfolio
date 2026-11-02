import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="Contact" className="bg-bg-darkest px-4 py-10 md:px-8 scroll-mt-20">
      <h2 className="border-l-[6px] border-accent-warning pl-4 text-3xl font-bold">
        Contact Information
      </h2>

      <div className="mt-6 w-full rounded-xl bg-bg-darkest shadow-lg">
        <div className="p-6">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Contact Section */}
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-accent-cyan">
                Contact
              </h3>

              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-accent-cyan" size={20} strokeWidth={2.5} />
                  <p>muhammadmuhsin67@gmail.com</p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-accent-cyan" size={20} strokeWidth={2.5} />
                  <p>019-2029523</p>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-accent-cyan" size={20} strokeWidth={2.5} />
                  <p>No.7 Kampung Linchai, Mukim Kedawang, 07000 Langkawi, Kedah</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#333] md:border-t-0 md:border-1" />

            {/* References Section */}
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-accent-cyan">
                References
              </h3>

              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-[#333] bg-bg-secondary p-4">
                  <p className="font-bold">Y. Bhg. Prof. Ts. Dato' Dr. Aziz bin Deraman</p>
                  <p className="text-sm">• Science Computer Lecturer</p>
                  <p className="text-sm">• 09-6683155 / 3676</p>
                </div>

                <div className="rounded-lg border border-[#333] bg-bg-secondary p-4">
                  <p className="font-bold">Noor Meryza Binti Mazlan</p>
                  <p className="text-sm">• Senior Business Analyst, Infomina Berhad</p>
                  <p className="text-sm">• 019-6670749</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;