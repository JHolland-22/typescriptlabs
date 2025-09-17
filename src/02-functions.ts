import { friends, colleagues} from './01-basics'
import {Friend, Colleague } from './myTypes'


function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}


function allOlder(friends: Friend[]) {
     var results = [];
     for (var f of friends) {
         f.age += 1;
         results.push(`${f.name} is now ${f.age}`);
     }
     return results;
 }
 


console.log(older(friends[0]))
console.log(allOlder(friends))


function highestExtension(cs: Colleague[]) { // Inferred retun type
     const result = cs.sort(
       (c1, c2) => c1.contact.extension - c2.contact.extension
     );
     return result[cs.length - 1];
   }
   



function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
     const c: Colleague = {
         name,
         department,
         contact: {
             email,
             extension: 133
         }
     }
     colleagues.push(c)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


export interface EmailContact {
     name: string;
     email: string
 }

 
 function sortColleagues(
     colleagues: Colleague[],
     sorter: (c1: Colleague, c2: Colleague) => number
   ): EmailContact[] {
     const sorted = colleagues.sort(sorter); // Colleague[] inferred
     const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
     return result 
   }
   
   console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
   console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

   

   function findFriends(friends: Friend[], criterion: (f: Friend) => boolean) {
     var results: string[] = [];
 
     for (var i = 0; i < friends.length; i++) {
         var f = friends[i];
         if (criterion(f)) {
             results.push(f.name);
         }
     }
 
     return results;
 }
 
 console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
 console.log(findFriends(friends, (friend) => friend.age < 35));
 