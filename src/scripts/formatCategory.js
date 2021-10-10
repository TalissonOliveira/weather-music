export function formatCategory(category) {
    switch (category) {
        case 'classical':
            return 'Clássica'
        case 'pop':
            return 'Pop'
        case 'rock':
            return 'Rock'
        case 'focus':
            return 'Lo-fi'
        default:
            break;
    }
}