# JavaScript function: Unexpected NaN result with undefined input

This repository demonstrates a common JavaScript issue where undefined inputs lead to NaN outputs due to implicit type coercion. The `foo` function handles null and NaN values correctly, but it silently converts undefined arguments to NaN, potentially causing unexpected behavior.

## Bug
The bug lies in how the function handles `undefined` inputs.  Instead of explicitly checking for `undefined`, it relies on JavaScript's implicit type conversion, which converts `undefined` to `NaN`. This can lead to unexpected `NaN` results when `undefined` is passed as an argument.

## Solution
The solution explicitly checks for and handles the `undefined` inputs. This provides more robust error handling and predictable behavior.

## How to reproduce
1. Clone the repository.
2. Run `bug.js`.  Observe the unexpected `NaN` output when passing `undefined` arguments.
3. Run `bugSolution.js`. Observe the improved error handling with an explicit check for `undefined` values.
