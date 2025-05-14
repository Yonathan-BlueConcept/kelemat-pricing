function calculatePaymentPerAdForChannelOwner(subscriberCount) {
    let revenue = 0;
  
    const smallChannelRate = 0.077;     // For channels with 250 to 1000 subscribers
    const mediumChannelRate = 0.0154;   // For channels with 1001 to 5000 subscribers
    const largeChannelRate = 0.0077;    // For channels with 5001 to 10000 subscribers
    const extraLargeChannelRate = 0.00308; // For channels with more than 10000 subscribers
  
    if (subscriberCount < 100) {
      revenue = 0;
    } else if (subscriberCount < 250) {
      // New payment logic for 100 - 249 subscribers (small starter channels)
      revenue = 0.05 * subscriberCount;  // Example rate for starter channels (you can adjust 0.05)
    } else if (subscriberCount <= 1000) {
      revenue = smallChannelRate * subscriberCount;
    } else if (subscriberCount <= 5000) {
      revenue = 77 + mediumChannelRate * (subscriberCount - 1000);
    } else if (subscriberCount <= 10000) {
      revenue = 138.6 + largeChannelRate * (subscriberCount - 5000);
    } else {
      revenue = 177.1 + extraLargeChannelRate * (subscriberCount - 10000);
    }
  
    return parseFloat(revenue.toFixed(2));
  }
  

  module.exports = {
    calculatePaymentPerAdForChannelOwner
};