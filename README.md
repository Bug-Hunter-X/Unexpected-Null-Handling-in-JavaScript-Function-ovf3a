# Unexpected Null Handling in JavaScript

This repository demonstrates a common error in JavaScript related to null value handling. The `foo` function is designed to add two numbers, but it does not correctly handle null values as inputs.  This can cause unexpected behavior and potential errors in applications that rely on this function.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug Description
The original code does not explicitly check for and handle null values.  If either `a` or `b` is null, the addition operation will produce an unexpected result.  This is because the addition of null to a number will result in NaN (Not a Number) or potentially other unexpected behaviors depending on the context of its usage within the larger application.

## Solution
The solution checks for null values and explicitly handles them, returning null or another appropriate value when such inputs are encountered.