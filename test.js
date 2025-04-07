#!/usr/bin/env node
import tweetCounter from './index.js';

// CLI 인자로부터 트윗 텍스트 가져오기
const input = process.argv.slice(2).join(' ').trim();

if (!input) {
    console.log('\n❗ 사용법:');
    console.log('   node test.js "트윗 내용"\n');
    process.exit(1);
}

// 결과 계산
const length = tweetCounter.count(input);
const isValid = tweetCounter.isValidLength(input);

// 출력
console.log('\n=== 트윗 텍스트 검증 ===');
console.log(`입력 내용: "${input}"`);
console.log(`문자 수 (Twitter 기준): ${length}`);
console.log(`유효한 트윗인가요?: ${isValid ? '✅ 예' : '❌ 아니오'}\n`);
