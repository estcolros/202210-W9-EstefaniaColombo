/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['dist', 'js'],
    resolver: 'jest-ts-webcompat-resolver',
};
