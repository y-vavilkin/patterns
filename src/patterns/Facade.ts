// Hard subsytem
class CPU {
  private state: string | null;

  constructor () {
    this.state = null;
  }

  freeze(): void {
    this.state = 'freezing';
  }

  execute():void {
    this.state = 'executing';
  }

  getStateCpu () {
    return this.state;
  }
}

class RAM {
  private data: unknown[] | null;

  constructor () {
    this.data = null;
  }

  load(address: number, data: unknown): void {
    if (this.data === null) {
      this.data = []
    }
    this.data[address] = data;
  }
}

class HDD {
  private data: unknown[] | null;

  constructor () {
    this.data = null;
  }

  read(address: number): unknown | null {
    return this.data ? this.data[address] : null;
  }
}

// Facade
class ComputerFacade {
  private cpu: CPU;
  private ram: RAM;
  private hdd: HDD;

  constructor() {
    this.cpu = new CPU();
    this.ram = new RAM();
    this.hdd = new HDD();
  }

  start() {
    this.cpu.freeze();
    this.ram.load(0, this.hdd.read(100));
    this.cpu.execute();
  }
}

export default ComputerFacade;
