// class user {
//   email: string;
//   name: string;
//   private readonly city: string = "isb";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const tahir = new user("a@@", "ali");
//tahir.city = "rwp";

//
// class user {
//   private coursecount: number = 1;
//   readonly city: string = "isb";

//   constructor(public email: string, public name: string) {}
//   get getappleemail(): string {
//     return `apple${this.name}`;
//   }

//   get coursecnt(): number {
//     return this.coursecount;
//   }

//   set coursecounttt(courenumber): number {
//     if (courenumber < 1) {
//       throw new Error("course count should be greater that 1");
//     }
//     this.coursecount = courenumber;
//   }
// }
// const tahir = new user("a@@", "ali");
//tahir.city = "rwp";

class user {
  protected coursecount: number = 1;
  readonly city: string = "isb";

  constructor(public email: string, public name: string) {}
  get getappleemail(): string {
    return `apple${this.name}`;
  }

  get coursecnt(): number {
    return this.coursecount;
  }
}
