import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ name, role, imageUrl, fbURL }) => (
  <div className="w-64 outerdiv rounded overflow-hidden shadow-sm m-4 bg-white transform transition-transform  hover:shadow-md group relative">
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        className="w-full object-cover transition-transform duration-500 group-hover:translate-y-[-0px]"
        src={imageUrl}
        alt={name}
        layout="fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex p-4 justify-end items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-white space-x-4">
          <a href={fbURL} className="hover:text-blue-500"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 text-black">
      <div className="font-bold text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">{name}</div>
      <p className="text-gray-500 text-base group-hover:text-gray-700 transition-colors duration-300">
        {role}
      </p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    { name: 'Waqas', role: 'Co-founder & CEO', imageUrl: '/rafy1.jpg', fbURL: 'https://www.facebook.com/profile.php?id=100010261090362' },
    { name: 'Kashif', role: 'Marketing Manager', imageUrl: '/ali.png', fbURL: 'https://www.facebook.com/profile.php?id=100010261090362' },
    { name: 'Muhammad rafy1', role: 'Web Developer', imageUrl: '/jawad1.png' },
    { name: 'Ali Iftikhar', role: 'Web Developer', imageUrl: '/rafy1.jpg' },
    { name: 'Jawad Haider', role: 'Web Developer', imageUrl: '/ali.png' },
    { name: 'Nabia Nawaz', role: 'SEO Expert', imageUrl: '/rafy1.jpg' },
    { name: 'Saria Irshad', role: 'Mobile & Web Developer', imageUrl: '/ali.png' },
    { name: 'Wasiq Saqlain', role: 'UI/UX designer', imageUrl: '/jawad1.png' },
    { name: 'Hassan Khan', role: 'Marketing Manager', imageUrl: '/rafy1.jpg' },
    { name: 'Jawad Haider', role: 'UI/UX designer', imageUrl: '/jawad1.png' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Meet the Team</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {teamMembers.slice(0, 5).map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} fbURL={member.fbURL} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.slice(5, 10).map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} fbURL={member.fbURL} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
