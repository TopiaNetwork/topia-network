export const HomeApplication = () => {
  const displayApplication = (title: string, des: string) => {
    return (
      <div className="w-full]">
        <h3>{title}</h3>
        <p className="mt-8 text-[19px]">{des}</p>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full justify-center">
        <div className="flex w-[774px] flex-col">
          <h1 className="px-[89px] text-[68px]">Application</h1>
          <div className="grid flex-grow grid-cols-2">
            <div className="grid flex-grow grid-cols-1 bg-[#3B5D66]/10 p-[89px]">
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
                'Store NFT traits and images in decentralized way',
                ''
              )}
            </div>
            <div className="grid flex-grow grid-cols-1 bg-[#3B5D66]/10 p-[89px]">
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
        </div>
      </div>
    </section>
  )
}
