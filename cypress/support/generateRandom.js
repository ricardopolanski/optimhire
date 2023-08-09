export function generate_random() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomLength = 8
    let random = ''
    for (let i = 0; i <= randomLength; i++) {
        const randomString = Math.floor(Math.random() * chars.length)
        random += chars.substring(randomString, randomString + 1)
    }
    return random
}