import { Index } from '@kz/core';
import { TAbstractCollection } from './t_abstract_collection.ts';
import { TCollectionIndex } from './types/mod.ts';

export class TList<T> extends TAbstractCollection<T, TCollectionIndex<T>> {
  public get(index: number): T {
    return this._items[index];
  }

  public set(index: number, value: T): void {
    this._items[index] = value;
  }

  public add(value: T): void {
    this._items.push(value);
  }

  public remove(index: number): void {
    this._items.splice(index, 1);
  }

  public [Symbol.iterator](): Iterator<TCollectionIndex<T>> {
    let index = 0;
    const items = this.items;
    return {
      next(): IteratorResult<TCollectionIndex<T>> {
        const value = items[index];
        const collectionIndex = new Index(index++, items.length);
        
        if (index < items.length) {
          const result = { index: collectionIndex, value };
          index++;

          return { done: false, value: result };
        }

        return { done: true, value: null };
      },
    };
  }
}