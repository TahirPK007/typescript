abstract class takephoto {
  constructor(public cameramode: string, public filter: string) {}
  abstract getsepia(): void;
  getreeltime(): number {
    return 8;
  }
}

//const hit = new takephoto("test", "test");

class ig extends takephoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameramode, filter);
  }
  getsepia(): void {
    console.log("first");
  }
}
