type TestCase = {
    id:number;
    name: string;
    description: string;
    steps: string[]; 
    expectedResults: string | number; 
};

type RunStatus = "pending"|"in progress"|"pass" | "fail";

type TestRun ={
    testCases: TestCase[];
    status: RunStatus;
    executionTime : number;
};

const registerTest: TestCase ={
    id: 1,
    name: "Registration test",
    description:"descr",
    steps: ["Go to registration page", "Populate required feilds", "Press register button"],
    expectedResults: "User is registered successfully"
};

const loginTest: TestCase ={
    id: 2,
    name: "Login test",
    description:"descr",
    steps: ["Go to login page", "Populate required feilds", "Press login button"],
    expectedResults: "User is loged in"
};

const runCycle1: TestRun ={
    testCases: [registerTest, loginTest],
    status:"pass",
    executionTime: 30
};

console.log(`Test Run Status: ${runCycle1.status}`)
console.log(`Test Run execution time: ${runCycle1.executionTime}`)