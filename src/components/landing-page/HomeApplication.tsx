export const HomeApplication = () => {
  const displayApplication = (title: string, des: string) => {
    return (
      <div className="w-full">
        <h3 className="g-back-divide-line text-[16px] sm:text-[17px]">
          {title}
        </h3>
        {des ? (
          <p className="mt-[5px] text-[14px] tracking-wide text-[#fff]/90 md:mt-[10px] md:text-[#fff]/90">
            {des}
          </p>
        ) : null}
      </div>
    )
  }
  return (
    <section className="flex w-full justify-center px-[16px] lt:mt-[150px] md:mt-[300px]">
      <div className="absolute z-[-1] h-[1000px] w-full max-w-[2080px]">
        <picture className="absolute bottom-[200px] right-[-50px] w-[200px] sm:bottom-[200px] sm:w-[423px] lt:w-[623px] md:bottom-[350px] md:right-[-10%] md:w-[719px] mxl:bottom-[350px] mxl:right-[6%] mxl:w-[35%]">
          <source srcSet="/img/background/pto_06.avif" type="image/avif" />
          <source srcSet="/img/background/pto_06.webp" type="image/webp" />
          <img src="/img/background/pto_06.png" alt="Picture 6 of background" />
        </picture>
      </div>
      <div className="h-[1000px] max-w-[1120px] items-center justify-center">
        <div className="flex w-full flex-col items-center md:h-full md:items-start">
          <h1 className="pl-[20px] text-[40px] font-semibold tracking-wide md:text-[56px]">
            Application
          </h1>
          <div className="mt-[60px] hidden flex-grow grid-cols-2 gap-x-[18px] md:grid">
            <div className="g-card grid h-[350px] flex-grow grid-cols-1 px-[50px] pt-[50px] pb-[30px]">
              {displayApplication(
                'Website Hosting',
                'Decentralized front-end can improve the security of all Dapps'
              )}
              {displayApplication(
                'Social Media',
                'A decentralized twitter or wechat can help you own your data'
              )}
              {displayApplication(
                'On-chain NFT',
                'Secure ownership of your assets, such as game items'
              )}
            </div>
            <div className="g-card grid h-[350px] flex-grow grid-cols-1 px-[50px] pt-[80px] pb-[50px]">
              {displayApplication(
                'Publishing',
                'A decentralized medium can help you store your work and own your content forever'
              )}
              {displayApplication(
                'Fully on-chain Dapps',
                'All moves on-chain, such as fully on-chain games'
              )}
            </div>
          </div>
          <div className="g-card mt-[60px] grid flex-grow grid-cols-1 gap-y-[35px] p-[20px] sm:p-[40px] md:hidden">
            {displayApplication(
              'Website Hosting',
              'Decentralized front-end can improve the security of all Dapps'
            )}
            {displayApplication(
              'Social Media',
              'A decentralized twitter or wechat can help you own your data'
            )}
            {displayApplication(
              'On-chain NFT',
              'Secure ownership of your assets, such as game items'
            )}
            {displayApplication(
              'Publishing',
              'A decentralized medium can help you store your work and own your content forever'
            )}
            {displayApplication(
              'Fully on-chain Dapps',
              'All moves on-chain, such as fully on-chain games'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
