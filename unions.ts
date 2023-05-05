let score: number | string;
score = 33;
score = "ali";
score = "ali";

type user = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let ali: user | admin = {
  name: "khan",
  id: 3,
};
ali = { username: "hc", id: 233 };

//
function getdbid(id: number | string) {
  if (typeof id == "string") {
    id.toLowerCase();
  } else {
    id.toFixed(0);
  }
  console.log(`db is id: ${id}`);
}
getdbid(3);

//with array

const data: (string | number)[] = [1, 2, 3, "4"];

//literal

let pi: 3.14 = 3.14;

let setallotment: "side" | "middle" | "window";
setallotment = "window";
