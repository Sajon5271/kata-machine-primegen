import SinglyLinkedList from "./SinglyLinkedList";

export default class Queue<T> extends SinglyLinkedList<T> {
    // public override length: number = 0;

    constructor() {
        super();
    }

    enqueue(item: T): void {
        this.append(item);
    }
    deque(): T | undefined {
        return this.removeAt(0);
    }
    peek(): T | undefined {
        return this.get(0);
    }
}
