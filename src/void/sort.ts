import Callable from '@axiona/function/callable.js';
import Value from '@axiona/value/value.js';
import SetContainer from '../set/set.js';

export function SortParameters<Value>(
    set : Set<Value>,
    compare : Callable<[Value, Value], number>
) : void {

    const arrays : Value[] = Array.from(set);

    const sorted = arrays.sort(compare);

    set.clear();

    for (const value of sorted) {

        set.add(value);
    }
}


export function SortParameter<Val>(
    {
        set,
        compare,
    } : SetContainer<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : void;

export function SortParameter<Val>(
    {
        value,
        compare,
    } : Value<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : void;

export function SortParameter<Val>(
    {
        value,
        set,
        compare,
    } : Value<Set<Val>> & SetContainer<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : void {

    SortParameters(set || value, compare);
}


namespace Sort {
    export const Parameters = SortParameters;
    export const Parameter = SortParameter;
}
export default Sort;
