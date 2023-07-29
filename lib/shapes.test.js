// /^#[0-9A-F]{6}$/i.test("#AABBCC");
// 6 char hex code
// ^          -> match beginning
// #          -> a hash
// [0-9A-F]   -> any integer from 0 to 9 and any letter from A to F
// {6}        -> the previous group appears exactly 6 times
// $          -> match end
// i          -> ignore case
// test for a 6hex code