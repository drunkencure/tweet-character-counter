#!/usr/bin/env node
import tcc from './index.js';

// Get tweet text from CLI arguments
const input = process.argv.slice(2).join(' ').trim();

if (!input) {
    console.log('\n❗ Usage:');
    console.log('   node test.js "Your tweet text here"\n');
    process.exit(1);
}

// Calculate result
const length = tcc.count(input);
const isValid = tcc.isValidLength(input);

// Output
console.log('\n=== Tweet Text Validation ===');
console.log(`Input: "${input}"`);
console.log(`Character count (Twitter rules): ${length}`);
console.log(`Is it a valid tweet?: ${isValid ? '✅ Yes' : '❌ No'}\n`);
