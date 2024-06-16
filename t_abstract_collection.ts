
export abstract class TAbstractCollection<T, I> implements Iterable<I> {
  protected _items: T[] = [];

  public get length(): number {
    return this._items.length;
  }

  public get items(): T[] {
    return [...this._items];
  }

  abstract [Symbol.iterator](): Iterator<I>;
}