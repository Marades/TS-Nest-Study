/**
일단 내 상황에 맞춰서 연습해보자

# 시나리오

회사에서 집에 가는 방법에는 2가지 방법이 있다.

1.  지하철
- 비용 : 1000원
- 행복도 : -10

2.  택시
- 비용 : 10000원
- 행복도 : + 10

 */

interface LeavingWorkStrategy {
  execute();
}

class LeavingWorkStrategyBySubway implements LeavingWorkStrategy {
  execute() {
    console.log("지옥철로 퇴근.. 그래도 싸니까..");
  }
}

class LeavingWorkStrategyByTaxi implements LeavingWorkStrategy {
  execute() {
    console.log("비싸지만 편하게 퇴근~");
  }
}

class LeavingWorkContext {
  private strategy: LeavingWorkStrategy;

  public setStrategy(strategyKey: string) {
    switch (strategyKey) {
      case "SUBWAY":
        this.strategy = new LeavingWorkStrategyBySubway();

        break;
      case "TAXI":
        this.strategy = new LeavingWorkStrategyByTaxi();

        break;

      default:
        throw Error("걸어서는 못가용");
        break;
    }
  }

  execute() {
    this.strategy.execute();
  }
}

class Person {
  protected happiness: number;
  protected money: number;
  protected leavingWorkContext: LeavingWorkContext = new LeavingWorkContext();

  leaveWork(method: string) {
    this.leavingWorkContext.setStrategy(method);
    this.leavingWorkContext.execute();
  }
}

class Marades extends Person {}

const person = new Marades();
person.leaveWork("TAXI");
person.leaveWork("SUBWAY");
// person.leaveWork("BUS");  -> 걸어서 퇴근하는 건 버그임
