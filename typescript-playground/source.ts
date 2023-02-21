import "reflect-metadata";
type CustomDecorator<TKey = string> = MethodDecorator &
  ClassDecorator & {
    KEY: TKey;
  };

function SetMetadata<K = string | symbol, V = any>(
  metadataKey: K,
  metadataValue: V
): CustomDecorator<K> {
  const decoratorFactory = (target: any, key?: any, desc?: any) => {
    console.log(target, key, desc);
    if (desc) {
      Reflect.defineMetadata(metadataKey, metadataValue, desc.value);
      return desc;
    }
    Reflect.defineMetadata(metadataKey, metadataValue, target);
    console.log(metadataKey, metadataValue);
    return target;
  };
  decoratorFactory.KEY = metadataKey;
  return decoratorFactory;
}

const JOB = Symbol("JOB");
const DANCER = Symbol("DANCER");
const SINGER = Symbol("SINGER");

interface IPerson {
  name: string;
  age: number;

  sing(): void;
}

@SetMetadata(JOB, DANCER)
class Dancer implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    // console.log("dancer : ", Reflect.getOwnMetadataKeys(this));
  }
  sing(): void {
    console.log("woo~");
    // console.log("dancer metadata keys : ", Reflect.getOwnMetadataKeys(this)); not work
    console.log("dancer metadata keys : ", Reflect.getOwnMetadataKeys(Dancer));
    console.log("dancer desc: ", Reflect.getOwnPropertyDescriptor(this, JOB));
  }
}

@SetMetadata(JOB, SINGER)
class Singer implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sing(): void {
    console.log("woooooo~~");
  }
}

const person = new Dancer("cris", 16);
const singer = new Singer("adel", 37);

person.sing();
singer.sing();
