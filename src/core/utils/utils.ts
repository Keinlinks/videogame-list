
export function getDateFromString(dateString: string): Date | null {
    if (isNaN(Date.parse(dateString))) return null;
    return new Date(dateString);
}

export function getArrayFromStringWithSeparator(string: string, separator: string): string[] {
    return string.split(separator).map((item) => item.trim());
}