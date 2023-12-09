class node<T> {
    public data: T;
    public next: node<T> | null = null;
    public prev: node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export default class DoublyLinkedList<T> implements List<T> {
    private head: node<T> | null = null;
    private tail: node<T> | null = null;
    private count: number = 0;

    get length(): number {
        return this.count;
    }

    removeAt(index: number): T | undefined {
        if (index < 0 || index >= this.count) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        const removed = current!.data;
        if (current!.prev) {
            current!.prev.next = current!.next;
        } else {
            this.head = current!.next;
        }

        if (current!.next) {
            current!.next.prev = current!.prev;
        } else {
            this.tail = current!.prev;
        }

        this.count--;

        return removed;
    }

    remove(item: T): T | undefined {
        let current = this.head;

        while (current) {
            if (current.data === item) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.count--;

                return current.data;
            }

            current = current.next;
        }

        return undefined;
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.count) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        return current!.data;
    }

    prepend(item: T): void {
        const newNode = new node(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.count++;
    }

    append(item: T): void {
        const newNode = new node(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.count++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.count) {
            return;
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.count) {
            this.append(item);
            return;
        }

        const newNode = new node(item);
        let current = this.head;

        for (let i = 0; i < idx - 1; i++) {
            current = current!.next;
        }

        newNode.prev = current;
        newNode.next = current!.next;
        current!.next!.prev = newNode;
        current!.next = newNode;

        this.count++;
    }
}
