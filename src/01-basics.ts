interface Friend {
    name: string;
    phone: string;
    age: number;
    course: string;
    studyyear: number
}
  
const friend1 :Friend= {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 20,
    course: "Applied Computing",
    studyyear: 2
  };
  
  const friend2 :Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 22,
    course: "Game Development",
    studyyear: 4
  };
  
  const friends :Friend[] = [friend1, friend2];
  console.log(friends[1]);
  
interface Colleague  {
    name : string;
    department: string;
    contact: Contact;
}
  
interface Contact {
    email: string;
    extension: number;
  }

  const colleague1 :Colleague= {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 :Colleague= {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 :Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };


  // error on current will be fixed in next commit
  const colleagues :Colleague[] = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
  