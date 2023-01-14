let obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                }
                return { value: undefined, done: true };
            }
        };
    }
};
for (const val of obj) {
    console.log(val);
}
// hello
// world