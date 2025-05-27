export function validateEmail(email: string): string | null {
    const trimmed = email.trim();

    if (trimmed !== email) {
        return 'No spaces at beginning or end.';
    }
    if (!trimmed) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Invalid email format.';

    return null;
}
