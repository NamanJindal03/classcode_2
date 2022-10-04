// 1) A global execution context is created 
// 2) Memory allocation phase happens for your GEC 
// 3) COde Execution phase happens for your GEC 
// 4) As soon as a function is called -> it gets its own execution phase
// 5) Memory allocation for sum happens
// 6) Code Execution phase for sum happens
// 7) Execution context of sum is deleted
// 8) we resume code allocation phase of GEC
// 9) Again a execution phase for sum is created
// 10) Memory allocation for sum happens
// 11) Code Execution phase for sum happens
// 12) Execution context of sum is deleted
// 13) GEC -> global execution context is also deleted 