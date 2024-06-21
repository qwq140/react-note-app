export const filterNote = (notes, query) => {
    query = query.toLowerCase();
    return notes.filter(item =>
        item.title.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}