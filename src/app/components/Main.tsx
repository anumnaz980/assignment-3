import Image from 'next/image'
import React from 'react'
import logo from "@/app/assests/Logo.png"
import vector from "@/app/assests/Vector.png"
import workTogetherImage from "@/app/assests/Work Together Image.png"
import apple from "@/app/assests/Apple.png"
import Ms from "@/app/assests/Microsoft.png"
import slack from "@/app/assests/Slack.png" 
import google from "@/app/assests/Google.png"

const Main = () => {
  return (
    <>
    <div className='w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center'>
        <div className='w-[191px] h-[34px]'>
            <Image src={logo} alt=''/>
        </div>

        <div className='w-[737.5px] h-60px flex justify-between items-center'>
          <div className='w-[549px] h-[23px]'>
            <ul className='flex flex-row  justify-between text-white font-sans font-medium text-lg leading-[23px]'>
              <li>Product</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>

            <div className='w-[126px] h-[60px]'>
              <button className='rounded-lg py-4 px-10 bg-[#FFE492] font-inter font-medium text-lg 
                 leading-[23px] tracking-[-0.02em] text-[#043873]'>Login
              </button>
            </div>
          </div>
    </div>

    {/* hero section */}
    <div className='w-[1920px] h-[829px] top-[92px] left-1 py-[140px] px-[220px] flex bg-[#043873]'>
     <div className='w-[656px] h-[361px]  grid gap-[60px]'>
      <div className='w-[656px] h-[154px] pt-20'>
        <h2 className='w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77.45px] 
           tracking-[-0.02em] text-[#FFFFFF]'>Get More Done With Whitespace
        </h2>
        <p className='w-[656px] h-[63px] font-inter font-normal text-lg leading-[30px] 
           tracking-[-0.02em] text-[#FFFFFF] mt-6' >
          Project management software that enables your teams to collaborate, plan, <br />analyze, and manage everyday tasks
        </p>
      </div>

      <div className='w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg mt-40'>
        <button className='p-5 gap-[10px] font-inter font-medium text-lg leading-[23px] 
          tracking-[-0.02em] text-[#FFFFFF] flex justify-between items-center'>Try Whitespace free  <Image src={vector} alt=''/>
        </button>
      </div>
     </div>

     <div className='w-[824px] h-[549px] bg-[#C4DEFD] 
        justify-center'>
      </div>

    </div>

    {/* Project-management */}

         <div className='w-[1920] h-[1588] top-[921px] left-[1px] py-[140px] px-[220px] grid gap-[100px]'>
          <div className='w-[1480px] h-[547px] gap- flex items-center[60px]'>
           <div className='w-[627px] h-[411px] grid gap-[60px]'>
              <div className='w-[627px] h-[288px] pt-10 gap-6'>
                <h1 className='w-[627px] h-[174px] font-inter font-bold text-7xl leading-[87.14px]
                  tracking-[-0.02em] text-[#212529]'>Project Management
                </h1>
                <p className='w-[627px] h-[90px] font-inter font-normal text-lg leading-[30px] 
                   tracking-[-0.02em] text-[#212529] mt-6' >Images, videos, PDFs and audio files are supported. Create math expressions and 
                  diagrams directly from th app. Take photos with the mobile app and save them to a note.
                </p>
              </div>

              <div className='w-[201px] h-[63px] bg-[#4F9CF9] rounded-lg mt-10 py-5 px-10 grid gap-[10px]'>
                <button className='flex items-center justify-center gap-2 font-inter font-medium 
                  text-lg text-[#FFFFFF]'>
                  Get Started <Image src={vector} alt='' />
                </button>
              </div>
            </div>

              <div
                 className='w-[824px] h-[549px] bg-[#C4DEFD]'>
              </div>
          </div>

    {/* Work together */}

          <div className='w-[1480px] h-[661px] gap-[100] flex'>
            <Image  src={workTogetherImage} alt=''/>
          
           <div className='w-[670px] h-[294px] gap-[60px] pt-44 pb-40 justify-center'>
            <div className='w-[670] h-[171px] gap-6'>
               <h1 className='font-inter  font-bold text-7xl leading-[87.14px] tarcking-[-0.02em]'>
                  Work together
               </h1>
                <p className='W-[670PX] h-[60px]  pt-7 font-inter font-normal text-lg leading-[30px] 
                   tracking-[-0.02em'>With whitespace, share your notes with your colleagues and collaborate on them.
                   <br />
                  You can also publish a note to a internet and share the URL with others.
                </p>
            </div>

             <div className='w-[186px] h-[63px] bg-[#4F9CF9] rounded-md mt-10 py-5 px-10 gap-[10px]'>
                <button className='flex items-center gap-2 font-inter font-medium text-lg 
                   text-[#FFFFFF] leading-[23px] tracking-[-0.02em]'>
                    Try it now<Image src={vector} alt='' />
                 </button>
              </div>
            </div>
            </div>
          </div>

          {/* Use as Extension */}

  <div className='w-[1921px] h-[759px] top-[2509px] left-1 py-[140px] px-[220px] flex bg-[#043873]'>
    <div className='w-[697px] h-[294px] grid gap-[60px]'>
      <div className='w-[697px] h-[171px] mt-16 grid gap-6'>
          <h2 className='w-[697px] h-[87px] font-inter font-bold text-[64px] leading-[77.45px] 
            tracking-[-0.02em] text-[#FFFFFF]'>Use as Extension
          </h2>
          <p className='w-[697px] h-[60px] font-inter font-normal text-lg leading-[30px] 
            tracking-[-0.02em] text-[#FFFFFF]' >
            Use teh web clipper extension, available on chrome and Firefox, to save web pages <br />
            or take screenshots or notes.
        </p>
      </div>
      <div className='w-[171px] h-[63px] bg-[#4F9CF9] rounded-lg py-5 px-10 grid gap-[10px]'>
        <button className='font-inter font-medium text-lg leading-[23px] tracking-[-0.02em] text-[#FFFFFF] 
           flex justify-between items-center'>Let's Go  <Image src={vector} alt=''/>
        </button>
      </div>
     </div>

      <div className='w-[824px] h-[549px] bg-[#C4DEFD] justify-center'>
    </div>
 </div>

      {/* Customise it to Your Needs */}

  <div className='w-[1921px] h-[812.09px] top-[3268px] left-1 py-[140px] px-[220px] gap-[98px] flex'>
    <div className='w-[714px] h-[532.09px]grid gap-1 bg-[#C4DEFD] justify-center'></div>
      
     <div className='w-[669px] h-[411px] grid gap-[60px]'>
       <div className='w-[669px] h-[288px] mt-16 grid gap-6'>
          <h2 className='w-[669px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] 
            tracking-[-0.02em] text-[#212529]'>Customise it to <br /> your needs
          </h2>
          <p className='w-[669px] h-[90px] font-inter font-normal text-lg leading-[30px] 
            tracking-[-0.02em] text-[#212529]' >
            Customise the app with plugins, custom themes and multiple text editors (Rich <br/> Text or Markdown).Or create your own scripts and plugins using the Extension API
          </p>
        </div>

      <div className='w-[171px] h-[63px] bg-[#4F9CF9] rounded-lg py-5 px-10 grid gap-[10px]'>
        <button className='font-inter font-medium text-lg leading-[23px] tracking-[-0.02em] text-[#FFFFFF]
          flex justify-between items-center'>Let's Go  <Image src={vector} alt=''/>
        </button>
      </div>
     </div>
     
    </div> 
     
     {/* Your Work */}

     <div className='w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] flex bg-[#043873]'>
      <div className='w-[1481px] h-[294px] grid gap-[60px] justify-center '>
        <div className='w-[1064px] h-[171px] grid gap-[24px]'>
          <div className='w-[1064px] h-[87px]'>
            <h1 className='font-inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center 
              text-[#FFFFFF]'>Your work, everywhere you are
            </h1>
          </div>

          <div className='w-[1064px] h-[60px]'>
             <p className='font-inter font-normal text-lg leading-[30px] tracking-[-0.02em]
               justify-between text-center'>
               Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox <br/> and Onedrive. The app is availale on Windows, macOS, Linix,Android and iOS.A terminal app is not available!
              </p>
          </div>
          <div className="flex justify-center w-full h-[63px]">
                <button className="w-[195px] py-5 px-10 rounded-lg bg-[#4F9CF9] flex justify-center 
                  items-center gap-[10px]">
                 <p className="font-medium text-lg leading-[23px] tracking-[0.02px] text-white">
                   Try Taskey →
                </p>
                 </button>
            </div>
        </div>
      </div>
    </div>

  {/* Our Sponsers */}

  <div className='w-[1922px] h-[538px] top-[4654] py-[140px] px-[220px] gap-[100px] flex flex-col'>
    <div className='w-[1482px] h-[87px]'>
      <h1 className='w-[1482px] h-[87px] font-inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] text-center justify-center'>Our sponsers
      </h1>
    </div>

    <div className='w-[1482px] h-[71px] flex justify-between items-center'>
      <div className='w-[55.47] h-[68px] gap-1'>
        <Image src={apple} alt='' />
      </div>

      <div className='w-[287px] h-[62px] gap-1'>
        <Image src={Ms} alt=''/>
      </div>

       <div className='w-[280px] h-[71px] gap-1'>
        <Image src={slack} alt=''/>
       </div>

       <div className='w-[] h-[]'>
        <Image src={google} alt='' />
       </div>
    </div>
  </div>

  {/* Footer */}

  <div className="w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] font-inter bg-[#043873] gap-[200px]">
        <div className="w-[1480px] h-[289px] flex gap-[100px] text-white">
          <div className="w-[1480] h-[169px] gap-[100px] flex justify-between">
            <div className="w-[295px] h-[169px] gap-[15px]">
              <div className="w-[191px] h-[34px]">
                <Image src={logo} alt=" " />
              </div>
              <div className="w-[240px] h-[120px]">
                <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
                  Whitepace was created for the new ways we live and work. We
                  make a better workspace around the world.
                </p>
              </div>
            </div>

            <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
              <h2 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
                Product
              </h2>
              <p className="w-[70px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#FFE492]">
                Overview
              </p>
              <p className="w-[50px] h-[22px] text-base leading-[20px] tracking-[-0.02em] text-white">
                Pricing
              </p>
              <p className="w-[177px] h-[22px] text-base leading-[20px] tracking-[-0.02em] text-white">
                Customer stories
              </p>
            </div>

            <div className="w-[295px] h-[130px] gap-4 flex flex-col">
              <h2 className="w-[91px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
                Resources
              </h2>
              <p className="w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                blog
              </p>
              <p className="w-[128px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                Guides & tutorials
              </p>
              <p className="w-[130px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                Help center
              </p>
            </div>

            <div className="w-[295px] h-[130px] gap-4 flex flex-col">
              <h2 className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
                Company
              </h2>
              <p className="w-[66px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                About us
              </p>
              <p className="w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                Careers
              </p>
              <p className="w-[99px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
                Media kit
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1480px] h-0 border-t rotate-0  border-[#2E4E73]"></div>
        <div className="w-[1480px] h-[20px] flex items-center justify-center">
          <div className="w-[169px] h-[20px] gap-[60px]">
            <p className="font-normal text-base leading-[20px] tracking-[-0.02em] justify-between text-white">
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>



  </>
    
  )
}

export default Main
