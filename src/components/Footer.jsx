import { logo } from "../assets/images";
import { footerLinks } from '../constans';
import { socialMedia } from "../constans";
import { copyrightSign } from "../assets/icons";

export default function Footer() {
  return (
    <footer className='max-container'>
      <div className='flex max-lg:flex-col justify-between items-start flex-wrap gap-20'>
        <div className='flex flex-col items-start'>
          <div className="mb-6 flex items-center gap-2">
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                width={30}
                height={25}
                className='m-0'
              />
            </a>
            <a href='/'>
              <span className="sm:inline text-2xl lg:text-3xl font-light font-montserrat text-white">Run&Play</span>
            </a>
          </div>
          <p className='mb-8 sm:max-w-sm text-base leading-7 font-montserrat text-white-400'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5'>
            {socialMedia.map(icon => (
              <div
                className='w-12 h-12 flex justify-center items-center  bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex-1 flex justify-between flex-wrap lg:gap-10 gap-20'>
          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className='mb-6 font-montserrat text-2xl leading-normal font-medium text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-24 flex max-sm:flex-col justify-between max-sm:items-center text-white-400'>
        <div className='flex-1 flex justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}
