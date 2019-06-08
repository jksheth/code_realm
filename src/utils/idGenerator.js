function* _idGeneratior() {
    let _id = 1;
    while(true) {
        yield _id++;
    }
}

const nextId = _idGeneratior();

export  {nextId};