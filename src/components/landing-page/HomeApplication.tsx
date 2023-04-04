export const HomeApplication = () => {
  const displayApplication = (title: string, des: string) => {
    return (
      <div className="w-full]">
        <h3 className="g-back-divide-line text-[16px] sm:text-[23px] md:text-[18px]">
          {title}
        </h3>
        {des ? (
          <p className="mt-[5px] text-[14px] text-[#fff]/70 md:text-[16px] md:text-[#fff]/90">
            {des}
          </p>
        ) : null}
      </div>
    )
  }
  return (
    <section className="flex w-full justify-center px-[16px] md:mt-[300px]">
      <div className="absolute z-[-1] h-[1000px] w-full max-w-[2080px]">
        <img
          src="/img/background/pto_06.png"
          alt="Picture 6 of background"
          className="absolute bottom-[200px] right-[-150px] h-[400px] sm:bottom-[200px] sm:h-[423px] lt:h-[623px] md:bottom-[350px] md:right-[-10%] md:h-[719px] mxl:bottom-[350px] mxl:right-[6%] mxl:h-[65.48%]"
        ></img>
      </div>
      <div className="h-[1000px] max-w-[1120px] items-center justify-center">
        <div className="flex w-full flex-col items-center md:h-full md:items-start">
          <h1 className="pl-[20px] text-[40px] font-semibold md:text-[56px]">
            Application
          </h1>
          <div className="mt-[60px] hidden flex-grow grid-cols-2 gap-x-[18px] md:grid">
            <div className="g-card grid h-[449px] flex-grow grid-cols-1 px-[50px] pt-[50px] pb-[10px]">
              {displayApplication(
                'Social Media',
                'Decentralized media (Mirror), dTwitter, dPersonal blog, etc'
              )}
              {displayApplication(
                'Composable NFT',
                'NFT with on-chain programmability'
              )}
              {displayApplication(
                'Fully on-chain NFT and NFT Exchange',
                'Store NFT traits and images in decentralized way'
              )}
              {displayApplication(
                'Other Web 3.0 and Metaverse Applications',
                ''
              )}
            </div>
            <div className="g-card grid h-[449px] flex-grow grid-cols-1 px-[50px] pt-[50px] pb-[10px]">
              {displayApplication(
                'Personal Data Market',
                'Store your encrypted personal data in your own account and only allow use after permission'
              )}
              {displayApplication(
                'Website Hosting',
                'Every dApp frontend can be hosted in a decentralized way'
              )}
              {displayApplication(
                'Fully on-chain GameFi',
                '95% code of gameFi  is currently deployed on centralized cloud servers'
              )}
            </div>
          </div>
          <div className="g-card mt-[60px] grid flex-grow grid-cols-1 gap-y-[35px] p-[30px] md:hidden">
            {displayApplication(
              'Social Media',
              'Decentralized media (Mirror), dTwitter, dPersonal blog, etc'
            )}
            {displayApplication(
              'Composable NFT',
              'NFT with on-chain programmability'
            )}
            {displayApplication(
              'Fully on-chain NFT and NFT Exchange',
              'Store NFT traits and images in decentralized way'
            )}
            {displayApplication(
              'Personal Data Market',
              'Store your encrypted personal data in your own account and only allow use after permission'
            )}
            {displayApplication(
              'Website Hosting',
              'Every dApp frontend can be hosted in a decentralized way'
            )}
            {displayApplication(
              'Fully on-chain GameFi',
              '95% code of gameFi  is currently deployed on centralized cloud servers'
            )}
            {displayApplication('Other Web 3.0 and Metaverse Applications', '')}
          </div>
        </div>
      </div>
    </section>
  )
}
