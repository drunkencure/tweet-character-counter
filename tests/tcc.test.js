import assert from 'node:assert/strict';
import tcc from '../index.js';

runTest('should count characters correctly', 'Hello Twitter!', true);

runTest(
    'should validate under 280 characters',
    '☼❀♢러✆☴l▼⚇Z라하z커차처◇☯D¶¤Z☽》K♤☏h✗N☶e£♡PQ▼¢M€《☆l♬d⚠라☰★마T⚡✂gc거Q❁조☵로코JJ✿→하호고모오K♣ok£저a☷✓나L♦♤머☼q✓♣퍼V파t△☲v☆⊙☯마▼사☲→퍼◇¥□✎◆B✄s서✈☱✆가⚈gw♧♤TOg조✎◇❂♀☽나T너x♬Cr✄f⚛❄p♥♀k❀✉□▲▲.\n' +
    'https://ws.or.kr/article/36980',
    true
);

runTest(
    'should invalidate over-limit tweet',
    'A'.repeat(281),
    false
);


function runTest(description, inputText, expectedValid) {
    console.log(`\n[TEST] ${description}`);
    console.log('입력 문자열:', inputText);
    const length = tcc.count(inputText);
    console.log(`문자 수: ${length}`);
    const isValid = tcc.isValidLength(inputText);
    console.log(`isValidLength 결과: ${isValid}`);
    assert.strictEqual(isValid, expectedValid);
    console.log('✅ Passed');
}
