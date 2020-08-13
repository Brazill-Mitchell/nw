export const screenSizes = {
    MOBILE: 'MOBILE', 
    TABLET: 'TABLET', 
    COMPUTER: 'COMPUTER', 
    XL: 'XL', 
}

export const mediaBreakPoints = [
    [screenSizes.MOBILE,'(max-width: 500px)'],
    [screenSizes.TABLET,'(max-width: 800px)'],
    [screenSizes.COMPUTER,'(max-width: 1400px)'],
    [screenSizes.XL, '(min-width: 1400px)']
  ]