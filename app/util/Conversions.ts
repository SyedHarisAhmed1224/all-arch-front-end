export const Conversions = {
    unicodeToEmoji: (unicode: string): string => {
        const hex = unicode.replace("U+", "")
        return String.fromCodePoint(parseInt(hex, 16))
    }
} 