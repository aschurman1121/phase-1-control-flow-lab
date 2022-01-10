function scuberGreetingForFeet(x) {
  let distanceInFeet = x;
  if (distanceInFeet <= 400) {
    return "This one is on me!"
  } else if (distanceInFeet >= 2001 && distanceInFeet < 2501) {
    return "I will gladly take your thirty bucks."
  } else (distanceInFeet >= 2501); {
    return "No can do."
  }
};

function ternaryCheckCity(cityName) {
  return cityName == 'NYC' ? ("Ok, sounds good." ) : ("No go.");
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case'generous':
      return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
    default: 
      return 'Bye.'  
  }

}








// function scuberGreetingForFeet(x){
//   let distanceInFeet = x;
//     if (distanceInFeet <= 400){
//       return 'This one is on me!'
//     } 
//   else if (distanceInFeet >= 2001 && distanceInFeet <2501){
//     return 'I will gladly take your thirty bucks.'
//   }
//   else (distanceInFeet >= 2501)
//     return 'No can do.'
//   }



// function ternaryCheckCity(cityName){
//     return cityName == 'NYC' ? ( "Ok, sounds good.") : ("No go.");
//     // console.log(ternaryCheckCity(Pittsburgh))
// }


// function switchOnCharmFromTip(tip){
//   switch (tip){
//     case "generous":
//        return 'Thank you so much.'
//       break;
//     case "not as generous":
//       return 'Thank you.'
//       break;
//     default:
//       return 'Bye.'}
  
// }