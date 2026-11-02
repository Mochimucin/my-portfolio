import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface EducationItem {
  title: string;
  subtitle: string | string[];
  date?: string;
  result?: string;
}

const educationList: EducationItem[] = [
  {
    title: 'SMK Kedawang',
    subtitle: 'Pentaksiran Tingkatan 3 (PT3)',
    date: '2012 - 2014',
    result: '7A 1B 2C',
  },
  {
    title: 'MRSM Kubang Pasu',
    subtitle: 'Sijil Pelajaran Malaysia (SPM)',
    date: '2015 - 2016',
    result: '5A 4B',
  },
  {
    title: 'Kolej Matrikulasi Kedah',
    subtitle: 'Science Stream (Biology Chemistry and Physic)',
    date: '2017 - 2018',
  },
  {
    title: 'Universiti Malaysia Terengganu',
    subtitle: 'Bachelor of Computer Science (Software Engineering)',
    date: '2019 - 2022',
  },
  {
    title: 'Perak Human Capital Development Centre (PHCDC)',
    subtitle: [
      'Expert Craftsmans Programmes – Pneumatic and Electro Pneumatics',
      'Expert Craftsmans Programmes – Mechatronic System',
      'Data Modelling and Statistical Analysis',
    ],
  },
]

const EducationCard = ({ edu }: { edu: EducationItem }) => (
  <div className="mx-2 rounded-xl border-l-[5px] border-[#1976d2] bg-[#2a2540] px-6 py-4 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:mx-0">
    <h3 className="text-lg font-bold">{edu.title}</h3>

    {Array.isArray(edu.subtitle) ? (
      <div className="mt-2 flex flex-col gap-1">
        {edu.subtitle.map((item, idx) => (
          <p key={idx} className="text-sm text-[#bcb6e2]">• {item}</p>
        ))}
      </div>
    ) : (
      <p className="mt-1 text-sm text-[#bcb6e2]">• {edu.subtitle}</p>
    )}

    {edu.date && <p className="mt-2 block text-xs text-[#aaa]">{edu.date}</p>}
    {edu.result && <p className="text-xs text-[#aaa]">{edu.result}</p>}
  </div>
);

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)');
    const handleChange = () => setIsMobile(mql.matches);
    handleChange();
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="Education" className="bg-bg-tertiary px-0 py-12 scroll-mt-20 text-white sm:px-12">
      <h2 className="mb-10 ml-4 border-l-[6px] border-accent-warning pl-4 text-2xl font-bold sm:ml-0 sm:text-3xl">
        Education Background
      </h2>

      {isMobile ? (
        <div className="px-1">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="!pb-10"
          >
            {educationList.map((edu, index) => (
              <SwiperSlide key={index}>
                <EducationCard edu={edu} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Education;