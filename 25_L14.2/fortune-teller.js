// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


let tellFortune = function(numKids, namePartner, geoLocation, jobTitle) {
    let future = 
    'You will be a ' + 
    jobTitle +
    ' in ' +
     geoLocation +
      ' and married to ' + 
      namePartner +
       ' with ' + 
       numKids +
        ' kids';
    console.log(future);
};
tellFortune(5, 'Petra', 'Eindhoven', 'putjesschepper');
tellFortune(1, 'Beatrix', 'Rome', 'FED');
tellFortune(9, 'Wilhelmina', 'Soesdijk', 'Koning');


