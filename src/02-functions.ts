import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'


function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
return result[cs.length - 1];
}

function addColleague(cs: Colleague[], name: string, department: string, email: string) {
  const newColleague: Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: highestExtension(cs).contact.extension + 1
    },
  };
  cs.push(newColleague);
}
// function sortColleagues(
//   colleagues: Colleague[],
//   sorter: (c1: Colleague, c2: Colleague) => number
// ): EmailContact[] {
//   const sorted = colleagues.sort(sorter); // Colleague[] inferred
//   const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
//   return result 
// }

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW



function findFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
) : string[] {
  const result = friends.filter(criteria).map((f) => f.name);
  return result;
  
}


console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

//console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
//console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

//console.log(highestExtension(colleagues.current));

//addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

//console.log(older(friends[0]))
