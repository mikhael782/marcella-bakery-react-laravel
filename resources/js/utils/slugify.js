export default function slugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-") // spasi jadi "-"
        .replace(/[^\w-]+/g, ""); // buang karakter aneh
}
