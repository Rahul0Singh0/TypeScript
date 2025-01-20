interface customInterface<T1, T2> {
    property: T1,
    moreProperty: T2
};

const obj: customInterface<number, string> = {
    property: 10,
    moreProperty: "10"
};

console.log(obj);