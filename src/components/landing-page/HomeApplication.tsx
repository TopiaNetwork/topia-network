export const HomeApplication = () => {
  const displayApplication = (title: string, des: string) => {
    return (
      <div className="w-full]">
        <h3 className="g-back-divide-line text-[33px] phone:text-[18px]">
          {title}
        </h3>
        {des ? (
          <p className="mt-[5px] text-[29px] text-[#fff]/70 phone:text-[14px] phone:text-[#fff]/90">
            {des}
          </p>
        ) : null}
      </div>
    )
  }
  return (
    <section className="flex h-[1800px] min-h-[960px] w-full justify-center phone:h-screen">
      <div className="g-body-container h-full items-center justify-center">
        <div className="flex w-full flex-col items-center phone:items-start">
          <h1 className="pl-[20px] text-[56px]">Application</h1>
          <div className="mt-[60px] hidden flex-grow grid-cols-2 gap-x-[18px] phone:grid">
            <div className="g-card grid h-[449px] flex-grow grid-cols-1 p-[50px]">
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
            <div className="g-card grid h-[449px] flex-grow grid-cols-1 px-[50px] pt-[50px] pb-[20px]">
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
          <div className="g-card mt-[60px] grid flex-grow grid-cols-1 gap-y-[55px] p-[50px] phone:hidden">
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
