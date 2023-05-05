interface userr {
  readonly id: number;
  email: string;
  userid: number;
  googleid?: number;
  //starttrial:()=>string
  starttrial(): string;
  getcoupon(cuponname: string, value: number): number;
}

interface userr {
  ghubtoken?: string;
}

interface admin extends userr {
  role: "admin" | "ta" | "learner";
}

const tahir: admin = {
  id: 2,
  email: "a",
  userid: 22,
  starttrial: () => {
    //return "trial started"
    return "ali";
  },
  getcoupon: (name: "ali", value: 10) => {
    return 10;
  },
  ghubtoken: "123",
  role: "admin",
};

interface takephoto {
  cameramode: string;
  filter: string;
  burst: number;
}

interface story {
  createstory(): void;
}

class instagram implements takephoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number
  ) {}
}

class youtue implements takephoto, story {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createstory(): void {
    console.log("story created");
  }
}
