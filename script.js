// ============================================
// JAVASCRIPT DEBUGGING LAB
// Identifying and Fixing Errors
// ============================================

// Utility function for output
function addOutput(elementId, message) {
    const outputDiv = document.getElementById(elementId);
    if (outputDiv) {
        const messageDiv = document.createElement('div');
        messageDiv.style.margin = '5px 0';
        messageDiv.style.padding = '5px';
        messageDiv.style.borderBottom = '1px solid #333';
        messageDiv.innerHTML = message;
        outputDiv.appendChild(messageDiv);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    console.log(message);
}

function clearOutput(elementId) {
    const outputDiv = document.getElementById(elementId);
    if (outputDiv) {
        outputDiv.innerHTML = '';
    }
}

// ============================================
// STEP 2.1: SYNTAX ERRORS
// ============================================

function runSyntaxError() {
    clearOutput('syntaxOutput');
    try {
        // FAULTY CODE - Missing closing parenthesis and bracket
        function greet(name {
            console.log("Hello, " + name;
        }
        greet("John");
    } catch (error) {
        addOutput('syntaxOutput', `❌ ERROR: ${error.message}`);
        addOutput('syntaxOutput', `Error Type: ${error.name}`);
        addOutput('syntaxOutput', `💡 Fix: Add missing ')' after parameter and '}' at end of function`);
    }
}

function runSyntaxFix() {
    clearOutput('syntaxOutput');
    try {
        // FIXED CODE
        function greet(name) {
            console.log("Hello, " + name);
        }
        greet("John");
        addOutput('syntaxOutput', `✅ Output: Hello, John`);
        addOutput('syntaxOutput', `✅ Code executed successfully! No syntax errors.`);
    } catch (error) {
        addOutput('syntaxOutput', `❌ ERROR: ${error.message}`);
    }
}

function runSyntaxError2() {
    clearOutput('syntaxOutput');
    try {
        // FAULTY CODE - Missing quotes around strings
        let colors = [red, green, blue];
        console.log(colors);
    } catch (error) {
        addOutput('syntaxOutput', `❌ ERROR: ${error.message}`);
        addOutput('syntaxOutput', `Error Type: ${error.name}`);
        addOutput('syntaxOutput', `💡 Fix: Add quotes around string values: ["red", "green", "blue"]`);
    }
}

function runSyntaxFix2() {
    clearOutput('syntaxOutput');
    try {
        // FIXED CODE
        let colors = ["red", "green", "blue"];
        console.log(colors);
        addOutput('syntaxOutput', `✅ Output: ${JSON.stringify(colors)}`);
        addOutput('syntaxOutput', `✅ Code executed successfully!`);
    } catch (error) {
        addOutput('syntaxOutput', `❌ ERROR: ${error.message}`);
    }
}

// ============================================
// STEP 2.2: RUNTIME ERRORS
// ============================================

function runRuntimeError() {
    clearOutput('runtimeOutput');
    try {
        // FAULTY CODE - Accessing property of null
        let user = null;
        console.log(user.name);
    } catch (error) {
        addOutput('runtimeOutput', `❌ ERROR: ${error.message}`);
        addOutput('runtimeOutput', `Error Type: ${error.name}`);
        addOutput('runtimeOutput', `💡 Fix: Use optional chaining (?.) or check if variable is not null`);
    }
}

function runRuntimeFix() {
    clearOutput('runtimeOutput');
    try {
        // FIXED CODE - Using optional chaining
        let user = null;
        let userName = user?.name || "User is null";
        console.log(userName);
        addOutput('runtimeOutput', `✅ Output: ${userName}`);
        
        // Alternative fix with condition
        if (user) {
            addOutput('runtimeOutput', `User name: ${user.name}`);
        } else {
            addOutput('runtimeOutput', `User object is null, cannot access name`);
        }
        addOutput('runtimeOutput', `✅ Code executed safely!`);
    } catch (error) {
        addOutput('runtimeOutput', `❌ ERROR: ${error.message}`);
    }
}

function runRuntimeError2() {
    clearOutput('runtimeOutput');
    try {
        // FAULTY CODE - Calling undefined function
        calculateTotal(100, 50);
    } catch (error) {
        addOutput('runtimeOutput', `❌ ERROR: ${error.message}`);
        addOutput('runtimeOutput', `Error Type: ${error.name}`);
        addOutput('runtimeOutput', `💡 Fix: Define the function before calling it`);
    }
}

function runRuntimeFix2() {
    clearOutput('runtimeOutput');
    try {
        // FIXED CODE - Define function first
        function calculateTotal(price, discount) {
            return price - discount;
        }
        let result = calculateTotal(100, 50);
        console.log(result);
        addOutput('runtimeOutput', `✅ Output: ${result}`);
        addOutput('runtimeOutput', `✅ Function defined and called correctly!`);
    } catch (error) {
        addOutput('runtimeOutput', `❌ ERROR: ${error.message}`);
    }
}

// ============================================
// STEP 3: LOGICAL ERRORS
// ============================================

function runLogicalError() {
    clearOutput('logicalOutput');
    // FAULTY CODE - String concatenation instead of addition
    function calculateSum(a, b) {
        return a + b;
    }
    let result = calculateSum(5, "10");
    addOutput('logicalOutput', `❌ LOGICAL ERROR: Expected 15, but got ${result}`);
    addOutput('logicalOutput', `💡 Issue: String concatenation instead of numeric addition`);
    addOutput('logicalOutput', `💡 Fix: Convert strings to numbers before adding`);
}

function runLogicalFix() {
    clearOutput('logicalOutput');
    // FIXED CODE - Convert to numbers
    function calculateSum(a, b) {
        return Number(a) + Number(b);
    }
    let result = calculateSum(5, "10");
    addOutput('logicalOutput', `✅ CORRECT OUTPUT: ${result} (5 + 10 = 15)`);
    addOutput('logicalOutput', `✅ Fixed by converting string to number!`);
}

function runLogicalError2() {
    clearOutput('logicalOutput');
    // FAULTY CODE - Wrong logical operator
    let age = 25;
    let hasLicense = false;
    addOutput('logicalOutput', `Age: ${age}, Has License: ${hasLicense}`);
    
    if (age >= 18 || hasLicense) {
        addOutput('logicalOutput', `❌ LOGICAL ERROR: Says "Can drive" but has no license!`);
        addOutput('logicalOutput', `💡 Issue: Using OR (||) instead of AND (&&)`);
    } else {
        addOutput('logicalOutput', `Cannot drive`);
    }
}

function runLogicalFix2() {
    clearOutput('logicalOutput');
    // FIXED CODE - Use AND operator
    let age = 25;
    let hasLicense = false;
    addOutput('logicalOutput', `Age: ${age}, Has License: ${hasLicense}`);
    
    if (age >= 18 && hasLicense) {
        addOutput('logicalOutput', `Can drive`);
    } else {
        addOutput('logicalOutput', `✅ CORRECT OUTPUT: Cannot drive (needs both age >= 18 AND license)`);
    }
}

function runLogicalError3() {
    clearOutput('logicalOutput');
    addOutput('logicalOutput', `⚠️ WARNING: This will cause an infinite loop!`);
    addOutput('logicalOutput', `💡 The loop has no increment, so i never reaches 5`);
    addOutput('logicalOutput', `💡 Fix: Add i++ inside the loop`);
    
    // This would freeze the browser, so we don't actually run it
    addOutput('logicalOutput', `(Infinite loop prevented for safety)`);
}

function runLogicalFix3() {
    clearOutput('logicalOutput');
    let i = 0;
    let output = [];
    while (i < 5) {
        output.push(i);
        i++;
    }
    addOutput('logicalOutput', `✅ CORRECT OUTPUT: Loop executed ${output.length} times: [${output.join(', ')}]`);
    addOutput('logicalOutput', `✅ Fixed by adding i++ increment!`);
}

// ============================================
// STEP 4: DEBUGGING TECHNIQUES
// ============================================

function demoConsoleDebug() {
    clearOutput('debugOutput');
    addOutput('debugOutput', 'Open browser console (F12) to see debug output');
    
    let x = 10;
    let y = 20;
    let result = x + y;
    
    console.log("=== Debugging Demo ===");
    console.log("Variable x =", x);
    console.log("Variable y =", y);
    console.log("Result = x + y =", result);
    console.log("Type of result:", typeof result);
    console.log("======================");
    
    addOutput('debugOutput', '✅ Check console (F12) for console.log() outputs');
}

function demoConsoleTable() {
    clearOutput('debugOutput');
    addOutput('debugOutput', 'Open browser console (F12) to see console.table()');
    
    let users = [
        { id: 1, name: "John", age: 25, city: "NYC" },
        { id: 2, name: "Jane", age: 30, city: "LA" },
        { id: 3, name: "Bob", age: 28, city: "Chicago" }
    ];
    
    console.table(users);
    
    addOutput('debugOutput', '✅ Check console for table view of array data');
}

function demoConsoleTime() {
    clearOutput('debugOutput');
    addOutput('debugOutput', 'Open browser console (F12) to see timing results');
    
    console.time("Loop Performance");
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    console.timeEnd("Loop Performance");
    
    addOutput('debugOutput', `✅ Sum of 0 to 999,999 = ${sum.toLocaleString()}`);
    addOutput('debugOutput', '✅ Check console for execution time measurement');
}

function demoConsoleTrace() {
    clearOutput('debugOutput');
    addOutput('debugOutput', 'Open browser console (F12) to see call stack trace');
    
    function functionA() {
        functionB();
    }
    
    function functionB() {
        functionC();
    }
    
    function functionC() {
        console.trace("Call stack trace:");
        addOutput('debugOutput', '✅ Check console for function call hierarchy');
    }
    
    functionA();
}

// ============================================
// STEP 5: COMPREHENSIVE FIX
// ============================================

function runFaultyProgram() {
    clearOutput('comprehensiveOutput');
    addOutput('comprehensiveOutput', '=== RUNNING FAULTY PROGRAM ===');
    
    // FAULTY PROGRAM with multiple bugs
    function getAverage(numbers) {
        let sum = 0;
        // BUG 1: Using <= instead of < (off by one error)
        for (let i = 0; i <= numbers.length; i++) {
            // BUG 2: When i equals length, numbers[i] is undefined
            sum += numbers[i];
        }
        return sum / numbers.length;
    }
    
    let scores = [85, 90, 78, 92, 88];
    let average = getAverage(scores);
    
    addOutput('comprehensiveOutput', `Scores: [${scores.join(', ')}]`);
    addOutput('comprehensiveOutput', `❌ FAULTY AVERAGE: ${average}`);
    addOutput('comprehensiveOutput', `💡 Issues identified:`);
    addOutput('comprehensiveOutput', `   1. Loop uses <= instead of < (causes extra iteration)`);
    addOutput('comprehensiveOutput', `   2. When i = 5, numbers[5] is undefined, adding NaN`);
    addOutput('comprehensiveOutput', `   3. Sum becomes NaN, average is NaN`);
}

function runFixedProgram() {
    clearOutput('comprehensiveOutput');
    addOutput('comprehensiveOutput', '=== RUNNING FIXED PROGRAM ===');
    
    // FIXED PROGRAM
    function getAverage(numbers) {
        // Check if input is valid
        if (!Array.isArray(numbers) || numbers.length === 0) {
            console.warn("Invalid input: Expected non-empty array");
            return 0;
        }
        
        let sum = 0;
        // FIX 1: Use < instead of <=
        for (let i = 0; i < numbers.length; i++) {
            // FIX 2: Ensure we're adding numbers, not strings
            let num = Number(numbers[i]);
            if (isNaN(num)) {
                console.warn(`Value at index ${i} is not a number: ${numbers[i]}`);
                continue;
            }
            sum += num;
        }
        
        // FIX 3: Handle division by zero
        if (numbers.length === 0) return 0;
        return sum / numbers.length;
    }
    
    let scores = [85, 90, 78, 92, 88];
    let average = getAverage(scores);
    
    addOutput('comprehensiveOutput', `Scores: [${scores.join(', ')}]`);
    addOutput('comprehensiveOutput', `✅ CORRECT AVERAGE: ${average}`);
    
    // Verify calculation
    let manualSum = scores.reduce((a, b) => a + b, 0);
    let manualAverage = manualSum / scores.length;
    addOutput('comprehensiveOutput', `✅ Verified: Manual calculation = ${manualAverage}`);
    addOutput('comprehensiveOutput', `✅ All bugs fixed! Code runs correctly.`);
}

// ============================================
// HELPER: Clear all outputs
// ============================================

function clearAllOutputs() {
    clearOutput('syntaxOutput');
    clearOutput('runtimeOutput');
    clearOutput('logicalOutput');
    clearOutput('debugOutput');
    clearOutput('comprehensiveOutput');
}

// Make clearAllOutputs available globally
window.clearAllOutputs = clearAllOutputs;
