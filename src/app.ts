function PropertyDecorator(
  classPrototype: Object,
  propertyName: string
) {
  console.log(classPrototype);
  console.log(propertyName);
}

function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(classPrototype);
  console.log(accessorName);
  console.log(propertyDescriptor);
}

function ParameterDecorator(classPrototype:Object,methodname:string,index:number){
  console.log(classPrototype)
  console.log(methodname)
  console.log(index)
}

class Airplane {
  @PropertyDecorator
  public _aircraftModel: string;
  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
  }

  public static seatCount(): void {
    console.log('150 Seats');
  }

  public pilotName(name: string,@ParameterDecorator lastName: string) {
    console.log(name);
    console.log(lastName)
  }

  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}
