class node<T> {
    value: T;
    next: node<T> | undefined;
    constructor(private val: T) {
        this.value = val;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head: node<T> | undefined = undefined;
    private tail: node<T> | undefined = undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        if (!this.head) {
            this.head = this.tail = new node(item);
            this.head.next = undefined;
        } else {
            const newNode = new node<T>(item);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) this.prepend(item);
        if (idx === this.length) this.append(item);
        let val = this.head;
        for (let i = 1; i < this.length - 1; i++) {
            if (idx === i) {
                if (val) {
                    const newNode = new node<T>(item);
                    newNode.next = val.next;
                    val.next = newNode;
                }
            }
            val = val?.next;
        }
    }
    append(item: T): void {
        if (!this.tail) {
            this.head = this.tail = new node(item);
            this.head.next = undefined;
        } else {
            const newNode = new node<T>(item);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            const val = this.head;
            this.head = val.next;
            val.next = undefined;
            this.length--;
            if (!this.length) this.tail = undefined;
            return val.value;
        }
        let val = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            if (val?.next?.value === item) {
                const currVal = val.next;
                val.next = currVal.next;
                if (!currVal.next) this.tail = val;
                this.length--;
                return currVal.value;
            }
            val = val?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx === 0) return this.head?.value;
        if (idx === this.length) return this.tail?.value;
        let val = this.head?.next;
        for (let i = 1; i < this.length - 1; i++) {
            if (idx === i) {
                return val?.value;
            }
            val = val?.next;
        }
        return val?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            const val = this.head;
            if (!val) return undefined;
            this.head = val.next;
            val.next = undefined;
            this.length--;
            if (!this.length) this.tail = undefined;
            return val.value;
        }
        let val = this.head;
        for (let i = 1; i < this.length - 1; i++) {
            if (idx === i) {
                if (!val?.next) return undefined;
                const currVal = val.next;
                val.next = currVal.next;
                if (!currVal.next) this.tail = val;
                this.length--;
                return currVal.value;
            }
            val = val?.next;
        }
        return undefined;
    }
}
