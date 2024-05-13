export default function filterFunc(str, list) {

    if (list.length === 0 || str.length === 0) {
        return list;
    }

    const regex = new RegExp(str);
    const result = list.filter(note => note.name.search(regex) !== -1);

    if (result.length > 0) {
        return result;
    }
    else {
        return []
    }
}
